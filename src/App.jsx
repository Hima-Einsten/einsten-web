import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Beranda from './pages/Beranda.jsx';
import Profil from './pages/Profil.jsx';
import Kegiatan from './pages/Kegiatan.jsx';
import Informasi from './pages/Informasi.jsx';
import Alumni from './pages/Alumni.jsx'; // Import halaman Alumni
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/alumni" element={<Alumni />} /> {/* Tambahkan rute Alumni */}
            <Route path="/informasi" element={<Informasi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
