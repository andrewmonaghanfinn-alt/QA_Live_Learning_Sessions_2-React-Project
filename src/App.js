import React from 'react';
import './style.css';

import Home from './pages/Home';
import Shop from './pages/Shop';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
