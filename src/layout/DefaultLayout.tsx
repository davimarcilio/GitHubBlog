import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { GitContext } from "../context/GitContext";

export function DefaultLayout() {
  const { items } = useContext(GitContext);
  // if (items.length > 0) {
  //   return ;
  // }
  return (
    <div className="text-base-title font-Nunito">
      {items.length === 0 && <Loading />}

      <Header />
      <main className="max-w-4xl w-full absolute px-10 -mt-28 left-1/2 -translate-x-1/2">
        <Outlet />
      </main>
    </div>
  );
}
