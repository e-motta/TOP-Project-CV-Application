import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <div className="logo-inner">CV</div>
        </div>
        <div className="header-title">
          Build your
          {' '}
          <span>Curriculum Vitae</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
