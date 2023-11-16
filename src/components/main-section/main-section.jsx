import { Routes, Route } from "react-router-dom";
import Blue from "../blue/blue";
import Red from "../red/red";
import Home from "../home/home";
import Green from "../green/green";
import Purple from "../purple/purple"

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}
