import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ReportIcon from '@mui/icons-material/Report';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ViewReportsCard: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: 'center',
        backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.background.paper,
        color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <ReportIcon color="secondary" sx={{ fontSize: 50 }} />
      </Box>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Ver Relatórios
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Acesse os relatórios de conciliação.
      </Typography>
      <Button variant="contained" color="secondary">
        Ver Relatórios
      </Button>
    </Paper>
  );
};

export default ViewReportsCard;
