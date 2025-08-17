import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoHima from '../assets/logo/logo einsten.png';
import { divisiData } from '../data/divisiData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisiOpen, setIsDivisiOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDivisiOpen(false);
  }

  const toggleDivisi = () => {
    setIsDivisiOpen(!isDivisiOpen);
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
          <li><Link to="/" onClick={closeMenu}>Beranda</Link></li>
          <li><Link to="/profil" onClick={closeMenu}>Profil</Link></li>
          <li className="dropdown">
            <a href="#!" onClick={toggleDivisi} className="dropdown-toggle">Divisi</a>
            <ul className={`dropdown-menu ${isDivisiOpen ? 'show' : ''}`}>
              {divisiData.map(divisi => (
                <li key={divisi.id}>
                  <Link to={`/divisi/${divisi.id}`} onClick={closeMenu}>{divisi.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/kegiatan" onClick={closeMenu}>Kegiatan</Link></li>
          <li><Link to="/alumni" onClick={closeMenu}>Alumni</Link></li>
          <li><Link to="/informasi" onClick={closeMenu}>Informasi</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
