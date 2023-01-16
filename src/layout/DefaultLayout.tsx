import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="text-base-title font-Nunito">
      <Header />
      <div className="max-w-4xl w-full px-10 -mt-28 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
