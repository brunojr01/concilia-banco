import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import ThemeToggle from '../ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Conciliação Bancária
        </Typography>
        <Link component={RouterLink} to="/" color="inherit" underline="none">
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          component={RouterLink}
          to="/reconciliation"
          color="inherit"
          underline="none"
        >
          <Button color="inherit">Reconciliation</Button>
        </Link>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
