import axios from "axios";

const inventoryAPI = axios.create({
  baseURL: "http://192.168.0.101:8000/inventory/api/v1/inventory/",
});

export const getAllInventory = () => inventoryAPI.get("/");
export const createInventory = (inventory) => inventoryAPI.post("/", inventory);
export const deleteInventory = (id) => inventoryAPI.delete(`/${id}/`);
export const updateInventory = (id, inventory) => inventoryAPI.put(`/${id}/`, inventory);
export const getInventory = (id) => inventoryAPI.get(`/${id}/`);
