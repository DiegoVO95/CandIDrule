import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidApp from "./components/CandidApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CandidApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;