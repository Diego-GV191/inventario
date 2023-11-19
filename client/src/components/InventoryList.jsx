import { useEffect, useState } from "react";
import { getAllInventory } from "../api/Inventory.API";
import { InventoryCard } from "./InventoryCard";

export function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function loadInventory() {
      const res = await getAllInventory();
      setInventory(res.data);
    }

    loadInventory();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {inventory.map((item) => (
        <InventoryCard key={item.id} inv={item} />
      ))}
    </div>
  );
}
