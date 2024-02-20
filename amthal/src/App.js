import React from "react";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
