import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GitContext } from "../../context/GitContext";
import { ItemCard } from "./components/ItemCard";
import { ItemInfo } from "./components/ItemInfo";

export function ItemDetails() {
  const { items } = useContext(GitContext);

  const { id } = useParams();

  if (items.length === 0) {
    return <p></p>;
  }
  const filteredItem = items.filter((item) => item.id == Number(id));
  const selectedItem = filteredItem[0];

  const ItemDate = formatDistance(
    new Date(selectedItem.created_at),
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );

  return (
    <div>
      <ItemCard selectedItem={selectedItem} ItemDate={ItemDate} />
      <ItemInfo selectedItem={selectedItem} />
    </div>
  );
}
