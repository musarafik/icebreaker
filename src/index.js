import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from "./components/aboutpage";
import Header from "./components/header";
import AllQuestions from "./components/allquestions";
import HomePage from "./components/homepage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/all" element={<AllQuestions/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Route>
    </Routes>
  </Router>
);