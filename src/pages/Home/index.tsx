import { useContext } from "react";
import { GitContext } from "../../context/GitContext";
import { ItemIssue } from "./components/Item";
import { Profile } from "./components/Profile";

export function Home() {
  const { items } = useContext(GitContext);

  return (
    <section>
      <Profile />
      {items.map((item) => (
        <ItemIssue key={item.id} item={item} />
      ))}
    </section>
  );
}
