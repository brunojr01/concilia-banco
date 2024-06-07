import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportIcon from '@mui/icons-material/Report';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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
          <Paper
            elevation={3}
            sx={{
              p: 2,
              textAlign: 'center',
              backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.background.paper,
              color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
            }}
          >
            <AccountBalanceIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
              Iniciar Reconciliação
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Comece a reconciliação bancária agora mesmo.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Iniciar
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              textAlign: 'center',
              backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.background.paper,
              color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
            }}
          >
            <ReportIcon color="secondary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
              Ver Relatórios
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Acesse os relatórios de conciliação.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Ver Relatórios
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              textAlign: 'center',
              backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.background.paper,
              color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
            }}
          >
            <DescriptionIcon color="action" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
              Documentação
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Consulte a documentação completa do sistema.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2, color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary }}>
              Ver Documentação
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
