import React from 'react';
import styled from 'styled-components';
import { color, fontFamily, fontSize } from '../../shared/theme';

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1.4rem 1rem;
  color: ${color('primary')};
`;

const Title = styled.h1`
  font-family: ${fontFamily('special')};
  font-size: ${fontSize('h3')};
`;

export function Header({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
