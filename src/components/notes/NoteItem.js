import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Text } from '../ui/Text';
import { color } from '../../shared/theme';
import { withSpacingProps } from '../ui/uiUtils';
import { getFriendlyDate } from '../../shared/utils';
import { FlexItem, Flex } from '../ui';
import { NoteDate } from '../ui/Notes';

function NoteItem({
  title = 'Untitled Note',
  content = 'No content',
  updatedAt,
  isSelected
}) {
  const friendlyDate = useMemo(() => getFriendlyDate(updatedAt), [updatedAt]);

  return (
    <NoteItemContainer isSelected={isSelected} p="sm">
      <Flex>
        <FlexItem style={{ minWidth: '35px' }}>
          <NoteDate color={isSelected ? 'dark' : 'medium'}>
            {friendlyDate}
          </NoteDate>
        </FlexItem>
        <FlexItem>
          <Text as="h5" truncate={1}>
            {title || 'Untitled Note'}
          </Text>
          <Text
            as="p"
            mt="sm"
            truncate={3}
            color={isSelected ? 'dark' : 'medium'}
          >
            {content || 'No content'}
          </Text>
        </FlexItem>
      </Flex>
    </NoteItemContainer>
  );
}

export const NoteItemContainer = styled.div`
  padding: 15px 0;
  cursor: pointer;
  height: 85px;
  ${withSpacingProps}
  ${props =>
    props.isSelected
      ? `
    border-bottom: 0.5rem solid ${color('secondary')}
    background: ${color('primary')}        
    color: ${color('dark')}
  `
      : `border-bottom: 1px solid ${color('bright')}`}
`;

export { NoteItem };
