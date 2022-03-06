import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PizzaDetail from "./components/PizzaDetail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pizza/:id" exact element={<PizzaDetail />} />
      </Routes>
    </div>
  );
}

export default App;
