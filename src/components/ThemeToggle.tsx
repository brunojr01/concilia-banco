import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" color="textSecondary">
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </Typography>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </Box>
  );
};

export default ThemeToggle;
