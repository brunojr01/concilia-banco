import React, { ReactNode } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={4}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default MainLayout;
