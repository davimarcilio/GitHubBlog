import { createContext, ReactNode, useState } from "react";

interface User {
  url: string;
}

interface Item {
  title: string;
  user: User;
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

export function gitContext({ children }: GitContextProps) {
  const [items, setItems] = useState({} as Item[]);

  return <GitContext.Provider value={items}>{children}</GitContext.Provider>;
}
