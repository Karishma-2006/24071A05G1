import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import VideoPage from "./pages/VideoPage";
import Progress from "./pages/Progress";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;