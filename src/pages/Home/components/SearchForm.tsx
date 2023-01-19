import { useContext, useEffect, useState } from "react";
import { GitContext } from "../../../context/GitContext";

export function SearchForm() {
  const [text, setText] = useState("");
  const { getItems, items } = useContext(GitContext);

  useEffect(() => {
    let timeout = setTimeout(() => {
      getItems(text);
    }, 500);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full flex flex-col gap-3 mt-16 mb-12 "
    >
      <div className="flex justify-between">
        <h1 className="text-base-subtitle font-bold text-lg">Publicações</h1>
        <p className="text-sm text-base-span">{items.length} publicações</p>
      </div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="w-full text-base-text py-3 focus:outline-none px-4 focus:border-blue placeholder:text-base-label text-base bg-base-input border border-base-border rounded-md"
        type="text"
        placeholder="Buscar conteúdo "
      />
    </form>
  );
}
