import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { InventoryPage } from "./pages/InventoryPage";
import { InventoryFormPage } from "./pages/InventoryFormPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/inventory" />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory-create" element={<InventoryFormPage />} />
          <Route path="/inventory/:id" element={<InventoryFormPage />} />
        </Routes>
        <Toaster />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
