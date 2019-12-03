import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useMatchMedia } from '../shared/hooks/useMatchMedia';

export function Header({ title, tag, user, onToggleMenu, onLogout }) {
  const isMobile = useMatchMedia('(max-width: 576px)');
  const location = useLocation();

  return (
    <header className="header">
      {!isMobile && <h1>{title}</h1>}
      {isMobile && location.pathname === '/' && (
        <React.Fragment>
          <div className="header-item">
            <a href="#tags" id="tags-toggle" onClick={onToggleMenu}>
              <svg
                width="16"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#C86818"
                  strokeWidth="3"
                  d="M0 1.5h16M0 6.5h16M0 11.5h16"
                />
              </svg>
            </a>
          </div>
          {tag && (
            <div className="header-item centered">
              <h2 className="header-tag">#{tag}</h2>
            </div>
          )}
        </React.Fragment>
      )}
      {user && (
        <div className="header-item right">
          <div>
            {!isMobile && <p className="header-name">Hola {user.name}</p>}
            <Link to="" onClick={onLogout}>
              Salir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

Header.displayName = 'Header';
