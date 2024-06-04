import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Maincomp from "./components/maincomp";
import Category from "./components/category";
import Login from "./components/login";
import Material from "./components/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Maincomp />}>
              <Route path="/category" element={<Category />} />
              <Route path="/material" element={<Material />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
