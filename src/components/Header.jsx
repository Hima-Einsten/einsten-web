import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoHima from '../assets/logo/logo einsten.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoHima} alt="Logo Hima" className="logo-img" />
        <div className="logo">
          <Link to="/">HIMA EINSTEN.COM</Link>
        </div>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Beranda</Link></li>
          <li><Link to="/profil" onClick={toggleMenu}>Profil</Link></li>
          <li><Link to="/kegiatan" onClick={toggleMenu}>Kegiatan</Link></li>
          <li><Link to="/alumni" onClick={toggleMenu}>Alumni</Link></li>
          <li><Link to="/informasi" onClick={toggleMenu}>Informasi</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
