import { BrowserRouter } from "react-router-dom";
import { GitContextJsx } from "./context/GitContext";
import { Router } from "./Router";
export function App() {
  return (
    <GitContextJsx>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GitContextJsx>
  );
}
