import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { fontFamily, fontSize } from '../../shared/theme';
import { useMedia } from '../../shared/hooks/useMedia';

export function Header({ title, tag, user, onToggleMenu, onLogout }) {
  const theme = useContext(ThemeContext);
  const isMobile = useMedia([theme.breakpoints.md], [false], true);

  return (
    <header className="header">
      {!isMobile && <Title>{title}</Title>}
      {isMobile && (
        <React.Fragment>
          <div className="header-item">
            <NavButton onClick={onToggleMenu} />
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
            <p className="header-name">Hola {user.name}</p>
            <Link to="" onClick={onLogout}>
              Salir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavButton({ onClick }) {
  return (
    <a href="#tags" id="tags-toggle" onClick={onClick}>
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
  );
}

const Title = styled.h1`
  font-family: ${fontFamily('special')};
  font-size: ${fontSize('h3')};
`;

const Tag = styled.h2`
  font-family: ${fontFamily('secondary')};
  font-size: ${fontSize('h4')};
  text-transform: uppercase;
  font-weight: bold;
`;
