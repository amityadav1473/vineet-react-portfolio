import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { navigation, profile } from '../data/portfolioData';

import './Header.css';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}

        <a href="#home" className="header-logo" onClick={closeMenu}>

          <span className="logo-icon">VK</span>

          <span className="logo-text">
            {profile.name}
            <span>.</span>
          </span>

        </a>


        {/* Navigation */}

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>

          {navigation.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

        </nav>


        {/* Mobile Menu Button */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

    </header>
  );
}

export default Header;
