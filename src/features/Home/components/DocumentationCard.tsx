import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';

const DocumentationCard: React.FC = () => {
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
      <DescriptionIcon color="action" sx={{ fontSize: 40 }} />
      <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
        Documentação
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Consulte a documentação completa do sistema.
      </Typography>
      <Button 
        variant="outlined" 
        sx={{ 
          mt: 2, 
          color: isDarkMode ? theme.palette.primary.light : theme.palette.primary.main, 
          borderColor: isDarkMode ? theme.palette.primary.light : theme.palette.primary.main 
        }}
      >
        Ver Documentação
      </Button>
    </Paper>
  );
};

export default DocumentationCard;
