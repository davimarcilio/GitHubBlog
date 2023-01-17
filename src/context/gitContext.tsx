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
}
export const GitContext = createContext({} as GitContextType);

interface GitContextProps {
  children: ReactNode;
}

export function GitContextTsx({ children }: GitContextProps) {
  const [items, setItems] = useState([] as Item[]);
  const [user, setUser] = useState({} as User);

  // async function getUser() {
  //   const response = await
  // }

  async function getItems() {
    const response = await api.get(
      "/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test"
    );
    console.log(response.data.items.length);

    for (let i = 0; i < response.data.items.length; i++) {
      const {
        id,
        title,
        user: { url, login },
        body,
        created_at,
        comments,
      } = response.data.items[i] as Item;
      setItems((state) => [
        ...state,
        { id, title, body, created_at, user: { url, login }, comments },
      ]);
    }
    const responseUser = await api.get("/users/daltonmenezes");
    const { avatar_url, bio, company, followers, html_url, login, name } =
      responseUser.data as User;
    setUser({ avatar_url, bio, company, followers, html_url, login, name });
  }
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      getItems();
    }
    i = i + 1;
  }, []);

  return (
    <GitContext.Provider value={{ items, user }}>
      {children}
    </GitContext.Provider>
  );
}
