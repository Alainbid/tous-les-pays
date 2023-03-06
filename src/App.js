import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Erreur404 from "./pages/Erreur404.js";
import Blog from "./pages/Blog.js";
import Login from "./pages/Login.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* ** modifier  en Home pour ne pas charger le login * */}
        <Route path="/login" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<Erreur404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
