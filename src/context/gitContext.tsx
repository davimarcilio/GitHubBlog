import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  followers: number;
  company: string;
  login: string;
}

export interface Item {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
    url: string;
  };
  body: string;
  comments: number;
  created_at: string;
}

interface GitContextType {
  items: Item[];
  user: User;
  isLoading: boolean;
  getItems: (text?: string) => void;
}
export const GitContext = createContext({} as GitContextType);

interface GitContextProps {
  children: ReactNode;
}

export function GitContextTsx({ children }: GitContextProps) {
  const [items, setItems] = useState([] as Item[]);
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(false);

  async function getItems(text?: string) {
    setItems([]);
    setIsLoading(true);
    const response = await api.get("/search/issues", {
      params: {
        q: `${!!text ? `${text}%20` : ""}repo:davimarcilio/GitHubBlog`,
      },
    });

    for (let i = 0; i < response.data.items.length; i++) {
      const {
        id,
        title,
        user: { url, login },
        body,
        created_at,
        comments,
        html_url,
      } = response.data.items[i] as Item;
      setItems((state) => [
        ...state,
        {
          id,
          title,
          body,
          created_at,
          user: { url, login },
          comments,
          html_url,
        },
      ]);
    }
    const responseUser = await api.get(`/users/davimarcilio`);
    const { avatar_url, bio, company, followers, html_url, login, name } =
      responseUser.data as User;
    setUser({ avatar_url, bio, company, followers, html_url, login, name });
    setIsLoading(false);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <GitContext.Provider value={{ items, user, isLoading, getItems }}>
      {children}
    </GitContext.Provider>
  );
}
