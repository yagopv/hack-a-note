import React from 'react';
import { Text } from '../ui/Text';
import { Box } from '../ui';

function Note({ title, description }) {
  return (
    <Box p="md">
      <Text as="h2">Lorem ipsum dolor sit amet</Text>
      <Text as="p" pt="md">
        Cras vitae lorem bibendum, finibus risus a, elementum ex. Quisque luctus
        eros felis, id imperdiet orci porta ac. Nulla pellentesque, metus eu
        accumsan ultricies, nisi risus blandit quam, sed sollicitudin mauris
        nisi ut massa. Vivamus in nibh varius, ultrices mauris quis, sodales
        risus. Mauris euismod felis tellus. Integer aliquam dapibus augue
        dapibus iaculis. Maecenas maximus, leo non iaculis luctus, sapien ipsum
        finibus erat, eu ultricies tellus nunc quis diam. Mauris non vestibulum
        eros, nec accumsan quam. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Pellentesque ut felis mollis
        lacus ultricies venenatis. Aliquam nibh justo, commodo in odio eget,
        tempor porttitor quam. Curabitur dapibus urna vestibulum, auctor orci
        at, finibus mi. In hac habitasse platea dictumst. Vivamus venenatis vel
        erat at laoreet. Pellentesque et metus id felis placerat consectetur.
      </Text>
      <Text as="h5" pt="md">
        Ut cursus mauris at tincidunt venenatis
      </Text>
      <Text as="p" pt="sm">
        Aenean vel turpis at nunc blandit commodo quis a urna. Vivamus
        consequat, libero nec laoreet egestas, orci lacus luctus ligula, in
        sodales ligula magna ac nibh. Mauris iaculis ligula vel semper blandit.
        Morbi dapibus venenatis augue, sit amet imperdiet erat gravida id.
        Praesent mollis velit in nisi ullamcorper cursus. Phasellus eu dolor ac
        tellus pharetra pulvinar placerat at velit. Morbi consectetur sapien vel
        mauris tincidunt, eu pulvinar nisl congue. Nullam commodo efficitur
        nulla. In maximus consequat dignissim. Nam ac iaculis magna. Nulla
        ullamcorper ullamcorper tellus nec sollicitudin. Nullam iaculis urna sed
        vulputate cursus. Fusce gravida ex a libero viverra, a iaculis sapien
        suscipit. Vivamus lectus felis, elementum sed dignissim non, tempor sed
        lectus. Mauris vel egestas sapien.
      </Text>
    </Box>
  );
}

export { Note };
