import { useNavigate } from "react-router-dom";

export function InventoryCard({ inv }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-2xl"
      onClick={() => {
        navigate(`/inventory/${inv.id}`);
      }}
    >
      <h1 className="font-bold uppercase text-center">{inv.name}</h1>
      <div className="mt-4">
        <hr className="border-t-2 border-slate-400" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h2 className="font-semibold uppercase text-red-500 text-left rounded-xl border-dashed border-2 border-sky-500 p-1 mb-1">
            Calib now: {inv.calib_now}
          </h2>
          <h2 className="font-semibold uppercase text-red-500 text-left rounded-xl border-dashed border-2 border-sky-500 p-1">
            Calib next: {inv.calib_next}
          </h2>
        </div>
        <div>
          <h2 className="font-semibold uppercase text-purple-600 text-right overflow-hidden overflow-ellipsis whitespace-nowrap border-b">
            {inv.name_inspect_1}
          </h2>
          <h2 className="font-semibold uppercase text-purple-600 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">
            {inv.name_inspect_2}
          </h2>
        </div>
      </div>
      <p className="text-slate-400 text-justify mt-4 whitespace-pre-line overflow-hidden overflow-ellipsis">{inv.description}</p>
    </div>
  );
}
