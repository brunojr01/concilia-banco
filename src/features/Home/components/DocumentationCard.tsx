import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DocumentationCard: React.FC = () => {
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
        <DescriptionIcon color="action" sx={{ fontSize: 50 }} />
      </Box>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Documentação
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Consulte a documentação completa do sistema.
      </Typography>
      <Button 
        variant="outlined" 
        sx={{ 
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
