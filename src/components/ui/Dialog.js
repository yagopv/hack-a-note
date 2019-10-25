import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button, Flex, Text } from '.';
import { color } from '../../shared/theme';

export function Dialog({ children, onCancel, onAccept }) {
  return ReactDOM.createPortal(
    <ModalContainer
      justifyContent="center"
      alignIntems="center"
      direction="column"
    >
      <ModalWrapper alignItems="center" direction="column">
        <Text as="h4" color="dark">
          {children}
        </Text>
        <Flex mt="xl">
          <Button background="bright" color="dark" onClick={onCancel}>
            Cancel
          </Button>
          <Button background="ko" ml="md" onClick={onAccept}>
            Accept
          </Button>
        </Flex>
      </ModalWrapper>
    </ModalContainer>,
    document.getElementById('root')
  );
}

const ModalContainer = styled(Flex)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

const ModalWrapper = styled(Flex)`
  padding: 1rem;
  background: ${color('primary')};
`;
