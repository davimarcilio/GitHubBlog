import { formatDistance, subDays } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { NavLink } from "react-router-dom";
import { Item } from "../../../context/GitContext";

interface ItemProps {
  item: Item;
}

export function ItemIssue({ item }: ItemProps) {
  const ItemDate = formatDistance(new Date(item.created_at), new Date(), {
    addSuffix: true,
    locale: ptBR,
  });
  return (
    <NavLink
      className="bg-base-post p-8 flex flex-col gap-5 cursor-pointer rounded-lg border-2 hover:border-base-label transition-colors border-base-post"
      to={`/${item.id}`}
    >
      <div className="flex max-sm:flex-col max-sm:gap-3 justify-between">
        <h1 className="text-xl font-bold text-base-title"> {item.title} </h1>
        <span className="text-base-span text-sm"> {ItemDate} </span>
      </div>
      <p className="truncate text-base-text text-base"> {item.body} </p>
    </NavLink>
  );
}
