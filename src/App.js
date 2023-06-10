import React,{useState} from 'react';



import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import HorizontalNav from './components/horizontalNav';
import ApiProvider from './context/context.js'
import Error from './pages/error/error';


function App() {
 
  return (
    <ApiProvider>
    <div className="App">
   
      <HorizontalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Dashboard />} />
        <Route path="/error" element={<Error/>} />
      </Routes>
     


    </div>
    </ApiProvider>
  );
}

export default App;
