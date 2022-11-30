import React from 'react';
import { ChakraProvider, Grid, GridItem, theme } from '@chakra-ui/react';
import Header from './Header';
import Navbar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Mainpage() {
  /* Structure of the main page */
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateColumns={'1fr 2fr'}
      >
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        <GridItem py={12}>
          <Navbar />
        </GridItem>
        <GridItem py={12}>
          <Outlet />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default Mainpage;
