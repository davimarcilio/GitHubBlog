import { ClipLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="absolute bg-slate-700 opacity-70 flex justify-center items-center z-50  w-full h-full">
      <ClipLoader size={100} speedMultiplier={0.4} color="#3294F8" />
    </div>
  );
}
