import { Routes, Route } from "react-router";
import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="relative bg-navy w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
