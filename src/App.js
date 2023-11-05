import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import MyPortfolio from "./Pages/MyPortfolio";
import MySkills from "./Pages/MySkills";
import Error404 from "./Pages/Error404";
import BlogPage from "./Pages/BlogPage";
import BlogPost from "./Pages/BlogPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/ContactMe" element={<ContactMe />}></Route>
          <Route path="/MySkills" element={<MySkills />}></Route>
          <Route path="/MyPortfolio" element={<MyPortfolio />}></Route>
          <Route path="/BlogPage" element={<BlogPage />}></Route>
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/BlogPost/:id" element={<BlogPost />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
