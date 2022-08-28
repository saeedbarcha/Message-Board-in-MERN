import React from "react";
import { BrowserRouter, Routes,Route} from 'react-router-dom'

import "./components/Navbar/Navbar.css";
import "./Pages/Dashboard/Dashboard.css";
import Navbar from "./components/Navbar/Navbar";
import "./Pages/Dashboard/Dashboard.css"
import Home from "./Pages/Home/Home";
import Art from './Pages/Art/Art'
import Dashboard from "./Pages/Dashboard/Dashboard";
import Cars from "./Pages/Cars/Cars";
import Music from "./Pages/Music/Music";
import Programming from "./Pages/Programming/Programming";
import Sports from "./Pages/Sports/Sports";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/arts" element={<Art/>}></Route>
      <Route path="/cars" element={<Cars/>}></Route>
      <Route path="/music" element={<Music/>}></Route>
      <Route path="/programming" element={<Programming/>}></Route>
      <Route path="/sports" element={<Sports/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      



    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
