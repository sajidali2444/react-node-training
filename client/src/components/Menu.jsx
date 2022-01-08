import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Menu() {
  const {
    userDetail: { name },
  } = React.useContext(UserContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Name: {name}</h1>
      <AppBar
        position="static"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(18px)',
          boxShadow:
            'rgba(0,0,0,0.2) 0px 12px 28px 0px, rgba(0,0,0,0.1) 0px 2px 4px 0px,rgba(255,255,255,0.5) 0px 0px 0px 1px',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" style={{ flexGrow: '0.6' }}>
            <NavLink
              to="/"
              style={{ textDecoration: 'none', color: 'white' }}
              activeClassName="colorlink"
            >
              Home
            </NavLink>
          </Button>

          {
            /*Object.keys(userDetail).length !== 0*/ name && (
              <>
                <Button color="inherit" style={{ flexGrow: '0.6' }}>
                  <NavLink
                    to="/customer"
                    style={{ textDecoration: 'none', color: 'white' }}
                    activeClassName="colorlink"
                  >
                    Add new
                  </NavLink>
                </Button>
                <Button color="inherit" style={{ flexGrow: '0.6' }}>
                  <NavLink
                    to="/customers"
                    style={{ textDecoration: 'none', color: 'white' }}
                    activeClassName="colorlink"
                  >
                    Customers
                  </NavLink>
                </Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
