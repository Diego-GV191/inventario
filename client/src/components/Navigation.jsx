import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { InventoryExcel } from "./InventoryExcel";

export function Navigation() {
  return (
    <div className="flex justify-between p-3 sticky top-0 z-50 backdrop-blur-md bg-gray-700/30 mb-5 shadow-md">
      <Link to="/">
        <h1 className="font-bold text-3xl mb-4">Inventory App</h1>
      </Link>

      <Popup
        trigger={
          <button className="bg-indigo-500 px-3 py-2 rounded-lg">
            Upload Inventory
          </button>
        }
        closeOnDocumentClick
        modal
        contentStyle={{
          background: "#1f2937",
          border: "none",
          borderRadius: "0.5rem",
        }}
      >
        <div className="p-2 bg-gray-800">
          <InventoryExcel />
        </div>
      </Popup>

      <Link to="/inventory-create">
        <button className="bg-indigo-500 px-3 py-3 rounded-lg">
          Create inventory
        </button>
      </Link>
    </div>
  );
}
