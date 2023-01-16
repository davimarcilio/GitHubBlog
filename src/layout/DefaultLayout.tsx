import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="text-base-title font-Nunito">
      <Header />
      <main className="max-w-4xl w-full absolute px-10 -mt-28 left-1/2 -translate-x-1/2">
        <Outlet />
      </main>
    </div>
  );
}
