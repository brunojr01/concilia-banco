import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao Sistema de Conciliação Bancária
      </Typography>
    </Container>
  );
};

export default Home;
