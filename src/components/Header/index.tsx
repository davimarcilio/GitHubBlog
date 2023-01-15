import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cover from "../../assets/Cover.png";
export function Header() {
  return (
    <header className="w-screen">
      <img className="w-full" src={Cover} alt="" />
      {/* <FontAwesomeIcon icon={faTerminal} />
      <h1>GITHUB BLOG</h1> */}
    </header>
  );
}
