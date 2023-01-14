import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faTerminal} />
      <h1>GITHUB BLOG</h1>
    </header>
  );
}
