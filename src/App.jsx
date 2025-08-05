import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Kegiatan from './pages/Kegiatan';
import Informasi from './pages/Informasi';
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
            <Route path="/informasi" element={<Informasi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;