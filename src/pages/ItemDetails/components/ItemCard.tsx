import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Item } from "../../../context/GitContext";

interface ItemCardProps {
  selectedItem: Item;
  ItemDate: string;
}

export function ItemCard({ selectedItem, ItemDate }: ItemCardProps) {
  return (
    <section className="flex px-10 py-8 shadow-xl items-center bg-base-profile  gap-8 rounded-xl">
      <div className="flex flex-col justify-between gap-5  flex-1">
        <div className="flex justify-between text-blue font-bold text-xs">
          <NavLink
            className={
              "flex gap-2 justify-center items-center hover:underline hover:underline-offset-4"
            }
            to={"/"}
          >
            <FontAwesomeIcon size="sm" icon={faAngleLeft} />
            VOLTAR
          </NavLink>
          <a
            className="hover:underline hover:underline-offset-4"
            href={selectedItem.html_url}
          >
            VER NO GITHUB{" "}
            <FontAwesomeIcon size="sm" icon={faUpRightFromSquare} />
          </a>
        </div>
        <h1 className="text-2xl font-bold text-base-title">
          {selectedItem.title}
        </h1>

        <div className="flex gap-6">
          <div className="flex gap-2 text-base-subtitle items-center">
            <FontAwesomeIcon
              size="sm"
              className="text-base-label"
              icon={faGithub}
            />
            <p>{selectedItem.user.login}</p>
          </div>
          <div className="flex gap-2 text-base-subtitle items-center">
            <FontAwesomeIcon
              size="sm"
              className="text-base-label"
              icon={faCalendarDay}
            />
            {ItemDate}
          </div>
          <div className="flex gap-2 text-base-subtitle items-center">
            <FontAwesomeIcon
              className="text-base-label"
              size="sm"
              icon={faComment}
            />
            {selectedItem.comments} comentários
          </div>
        </div>
      </div>
    </section>
  );
}
