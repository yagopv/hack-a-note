import React from 'react';

import { Text } from '../ui/Text';
import { Separator } from '../ui';

function NoteItem({ title, description }) {
  return (
    <React.Fragment>
      <Text as="h4">{title}</Text>
      <Text as="p" mt="sm">
        {description}
      </Text>
      <Separator />
    </React.Fragment>
  );
}

export { NoteItem };
