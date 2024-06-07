import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StartReconciliationCard from './components/StartReconciliationCard';
import ViewReportsCard from './components/ViewReportsCard';
import DocumentationCard from './components/DocumentationCard';

const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao Sistema de Conciliação Bancária
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este sistema permite a conciliação bancária de maneira fácil e eficiente.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <StartReconciliationCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <ViewReportsCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <DocumentationCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
