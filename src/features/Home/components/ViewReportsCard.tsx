import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ReportIcon from '@mui/icons-material/Report';
import { useTheme } from '@mui/material/styles';

const ViewReportsCard: React.FC = () => {
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
  );
};

export default ViewReportsCard;
