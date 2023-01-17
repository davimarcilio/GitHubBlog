import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faBuilding,
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GitContext } from "../../../context/GitContext";

export function ItemCard() {
  const { items } = useContext(GitContext);

  const { id } = useParams();

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
    <section className="flex px-10 py-8 shadow-xl items-center bg-base-profile  gap-8 rounded-xl">
      <div className="flex flex-col justify-between gap-5  flex-1">
        <div className="flex justify-between text-blue font-bold text-xs">
          <NavLink
            className={"flex gap-2 justify-center items-center"}
            to={"/"}
          >
            <FontAwesomeIcon size="sm" icon={faAngleLeft} />
            VOLTAR
          </NavLink>
          <a className="" href={"# "}>
            GITHUB <FontAwesomeIcon size="sm" icon={faUpRightFromSquare} />
          </a>
        </div>
        {/* <p className="text-base text-base-text">{user.bio}</p> */}
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
