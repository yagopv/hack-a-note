import React from 'react';

import { Typography } from '../ui/Typography';
import { Separator } from '../ui';

function NoteItem({ title, description }) {
  return (
    <React.Fragment>
      <Typography as="h4">{title}</Typography>
      <Typography as="p">{description}</Typography>
      <Separator />
    </React.Fragment>
  );
}

export { NoteItem };
