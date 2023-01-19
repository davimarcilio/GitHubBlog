import { useContext } from "react";
import { GitContext } from "../../context/GitContext";
import { ItemIssue } from "./components/Item";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

export function Home() {
  const { items } = useContext(GitContext);

  return (
    <section>
      <Profile />
      <SearchForm />

      <div className="grid grid-cols-2 gap-8 mb-10 max-sm:grid-cols-1">
        {items.map((item) => (
          <ItemIssue key={item.html_url} item={item} />
        ))}
      </div>
    </section>
  );
}
