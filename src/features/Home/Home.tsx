import React from 'react';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao Sistema de Conciliação Bancária
      </Typography>
      <Typography variant="body1">
        Esta é a página inicial.
      </Typography>
    </>
  );
};

export default Home;
