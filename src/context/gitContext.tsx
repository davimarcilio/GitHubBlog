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

interface Item {
  title: string;
  user: {
    url: string;
  };
  body: string;
  created_at: string;
}

interface GitContextType {
  items: Item[];
}
const GitContext = createContext({} as GitContextType);

interface GitContextProps {
  children: ReactNode;
}

export function GitContextJsx({ children }: GitContextProps) {
  const [items, setItems] = useState([] as Item[]);
  const [user, setUser] = useState({} as User);

  // async function getUser() {
  //   const response = await
  // }

  async function getItems() {
    const response = await api.get(
      "/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test"
    );

    for (let i = 0; i < response.data.items.length; i++) {
      const {
        title,
        user: { url },
        body,
        created_at,
      } = response.data.items[i] as Item;
      setItems((state) => [
        ...state,
        { title, body, created_at, user: { url } },
      ]);
    }
    const responseUser = await api.get("/users/daltonmenezes");
    const { avatar_url, bio, company, followers, html_url, login, name } =
      responseUser.data as User;
    setUser({ avatar_url, bio, company, followers, html_url, login, name });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <GitContext.Provider value={{ items }}>{children}</GitContext.Provider>
  );
}
