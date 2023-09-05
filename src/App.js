import logo from './logo.svg';
import './App.css';
import './Main.css'
import React, { useState, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/product/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
