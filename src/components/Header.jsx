import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HIMA EINSTEN.COM</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/kegiatan">Kegiatan</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/informasi">Informasi</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
