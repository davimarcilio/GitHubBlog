import { Header } from "./components/Header";
import { GitContextJsx } from "./context/GitContext";

export function App() {
  return (
    <GitContextJsx>
      <Header />
    </GitContextJsx>
  );
}
