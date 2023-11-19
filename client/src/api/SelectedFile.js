import Papa from "papaparse";
import { createInventory } from "./Inventory.API";

export const readCSV = (archivo) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const text = event.target.result;
    processData(text);
  };
  reader.readAsText(archivo, "ISO-8859-1");
};

export const processData = (text) => {
  Papa.parse(text, {
    header: true,
    encoding: "ISO-8859-1",
    complete: async (result) => {
      await result.data.forEach((item) => {
        createInventory(item);
      });
    },
    error: (error) => {
      console.error("Error al procesar el archivo CSV:", error);
    },
  });
};
