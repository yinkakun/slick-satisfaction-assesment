import React from 'react';
import * as Chakra from '@chakra-ui/react';

type ContainerProps = {
  children?: React.ReactNode;
};

export const ChakraContainer = ({
  children,
  ...props
}: ContainerProps): React.ReactElement => (
  <Chakra.Container
    maxW="1440px"
    w="full"
    h="full"
    mx="auto"
    px={[4, 6, 10]}
    {...props}
  >
    {children}
  </Chakra.Container>
);

export const Container = Chakra.chakra(ChakraContainer);
