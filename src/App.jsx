// src/App.jsx

import React from 'react';
// === PENTING: Gunakan HashRouter ===
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

// Pastikan Anda memiliki file Home.jsx di folder pages
import Home from './pages/Home.jsx'; 

const App = () => {
  return (
    // Menggunakan HashRouter memastikan semua rute (meskipun di-refresh)
    // akan selalu mengarah ke index.html, menghindari error 404 di server statis.
    <Router>
      <Routes>
        {/* Rute utama untuk halaman beranda */}
        <Route path="/" element={<Home />} />
        
        {/* Tambahkan rute untuk halaman lain di sini saat Anda membuatnya */}
        {/* Contoh: <Route path="/about" element={<About />} /> */}
        {/* Contoh: <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;