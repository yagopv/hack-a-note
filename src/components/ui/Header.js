import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { color, fontFamily, fontSize } from '../../shared/theme';
import { useMedia } from '../../shared/hooks/useMedia';
import { Flex, FlexItem } from './Flexbox';
import { Text } from '../ui';
import { Link } from './Link';

export function Header({ title, tag, isAuthenticated }) {
  const theme = useContext(ThemeContext);
  const isMobile = useMedia([theme.breakpoints.md], [false], true);

  return (
    <Flex alignItems="center" p="md">
      {!isMobile && <Title>{title}</Title>}
      {isMobile && (
        <React.Fragment>
          <FlexItem grow="1">
            <NavButton />
          </FlexItem>
          <FlexItem grow="1" textAlign="center">
            <Tag>#{tag}</Tag>
          </FlexItem>
        </React.Fragment>
      )}
      {isAuthenticated && (
        <FlexItem grow="1" textAlign="right">
          <div>
            <Text>Hola Marta</Text>
            <Link>Salir</Link>
          </div>
        </FlexItem>
      )}
    </Flex>
  );
}

function NavButton() {
  return (
    <a href="#tags" id="tags-toggle">
      <svg
        width="16"
        height="13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#C86818"
          stroke-width="3"
          d="M0 1.5h16M0 6.5h16M0 11.5h16"
        />
      </svg>
    </a>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1.4rem 1rem;
`;

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
