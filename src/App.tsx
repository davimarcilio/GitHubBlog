import { BrowserRouter } from "react-router-dom";
import { GitContextTsx } from "./context/GitContext";
import { Router } from "./Router";
export function App() {
  return (
    <GitContextTsx>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Router />
      </BrowserRouter>
    </GitContextTsx>
  );
}
