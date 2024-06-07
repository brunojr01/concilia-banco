import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useTheme } from '@mui/material/styles';

const StartReconciliationCard: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
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
  );
};

export default StartReconciliationCard;
