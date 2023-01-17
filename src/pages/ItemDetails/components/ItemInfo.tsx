import ReactMarkdown from "react-markdown";
import { Item } from "../../../context/GitContext";

interface ItemInfoProps {
  selectedItem: Item;
}

export function ItemInfo({ selectedItem }: ItemInfoProps) {
  const markdown = selectedItem.body;

  return (
    <div className="w-full py-10 px-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
