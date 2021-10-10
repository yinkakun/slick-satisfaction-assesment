import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Container } from '@/components/container';

const Home = (): React.ReactElement => (
  <Chakra.Box as="main" flexGrow={1} bg="gray.100">
    <Container display="flex" alignItems="center" justifyContent="center">
      <Chakra.Text opacity={0.1} fontSize="2xl" textTransform="capitalize">
        hello world.
      </Chakra.Text>
    </Container>
  </Chakra.Box>
);

export default Home;
