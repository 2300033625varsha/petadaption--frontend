import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import Rabbits from "./components/Rabbits";
import Birds from "./components/Birds";
import Hamster from "./components/hamster";
import Horse from "./components/horse";
import Turtile from "./components/turtile";
import Fish from "./components/Fish";

import About from "./components/About";
import Tips from "./components/Tips";
import TipDetail from "./components/TipDetail";  
import Volunteer from "./components/Volunteer";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* Navbar will always show */}
      <Navbar />

      <Routes>
        {/* Default route and /home both show Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Pet details pages */}
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/rabbits" element={<Rabbits />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/hamster" element={<Hamster />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/turtile" element={<Turtile />} />
        <Route path="/fish" element={<Fish />} />

        {/* Tips and Tip details */}
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:tipId" element={<TipDetail />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}
