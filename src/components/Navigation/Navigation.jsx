import { useState } from 'react';
import './Navigation.css';

export default function Navigation({ logoText = 'Northstar', links = [], activeHref }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav__inner">
        <div className="nav__bar">
          <a href="#" className="nav__logo">
            <img src="/logo.svg" alt="" className="nav__logo-icon" />
            {logoText}
          </a>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>

          <ul id="nav-menu" className={`nav__links ${isOpen ? 'nav__links--open' : ''}`}>
            {links.map((link) => {
              const isActive = activeHref === link.href;
              const linkClass = 'nav__link' + (isActive ? ' nav__link--active' : '');
              return (
                <li key={link.href}>
                  <a href={link.href} className={linkClass} aria-current={isActive ? 'page' : undefined}>{link.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}