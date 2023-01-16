import { Item } from "../../../context/GitContext";

interface ItemProps {
  item: Item;
}

export function ItemIssue({ item }: ItemProps) {
  return (
    <div>
      <div className="flex">
        <h1> {item.title} </h1>
        <span> {item.created_at} </span>
      </div>
      <p> {item.body} </p>
    </div>
  );
}
