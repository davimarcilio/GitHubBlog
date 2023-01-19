import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GitContext } from "../../../context/GitContext";
export function Profile() {
  const { user } = useContext(GitContext);

  return (
    <section className="flex px-10 py-8 shadow-xl items-center bg-base-profile  gap-8 rounded-xl">
      <img className=" rounded-lg w-36" src={user.avatar_url} alt="" />
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-base-title">{user.name}</h1>
          <a
            className="text-blue font-bold text-xs hover:underline hover:underline-offset-4"
            href={user.html_url}
          >
            GITHUB <FontAwesomeIcon size="sm" icon={faUpRightFromSquare} />
          </a>
        </div>
        <p className="text-base text-base-text">{user.bio}</p>
        <div className="flex mt-4 gap-6">
          <div className="flex gap-2 text-base-subtitle items-center">
            <FontAwesomeIcon
              size="sm"
              className="text-base-label"
              icon={faGithub}
            />
            <p>{user.login}</p>
          </div>
          {user.company && (
            <div className="flex gap-2 text-base-subtitle items-center">
              <FontAwesomeIcon
                size="sm"
                className="text-base-label"
                icon={faBuilding}
              />
              {user.company}
            </div>
          )}
          <div className="flex gap-2 text-base-subtitle items-center">
            <FontAwesomeIcon
              className="text-base-label"
              size="sm"
              icon={faUserGroup}
            />
            {user.followers} seguidores
          </div>
        </div>
      </div>
    </section>
  );
}
