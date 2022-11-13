import React from 'react';
import Navigation from './features/navigation/Navigation';
import Footer from './features/footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Palettes from './features/palettes/Palettes';
function App() {
  return (
    <>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/palettes" element={<Palettes />}/> 
          </Routes> 
      <Footer/>
    </>
  );
}

export default App;
