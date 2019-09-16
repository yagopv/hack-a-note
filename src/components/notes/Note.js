import React from 'react';
import { Text } from '../ui/Text';
import { Box } from '../ui';

function Note({ note: { title, description } }) {
  return (
    <Box p="md">
      <Text as="h2">{title}</Text>
      <Text as="p" pt="md">
        {description}
      </Text>
    </Box>
  );
}

export { Note };
