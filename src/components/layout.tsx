/* eslint-disable react/jsx-fragments */
import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/header';

type LayoutProps = {
  children: React.ReactNode;
};

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper {
        height: 100%;
      }
    `}
  />
);

const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <React.Fragment>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Slick Satisfaction Assesment</title>
    </Helmet>
    <GlobalStyles />
    <Chakra.Flex height="full" flexDirection="column">
      <Header />
      {children}
    </Chakra.Flex>
  </React.Fragment>
);

export default Layout;
