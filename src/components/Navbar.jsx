import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMobile = useMediaQuery('(max-width:900px)')
  const { toggleTheme, mode } = useThemeContext()

  const handleMenu = (event) => {
    if (event?.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Amrullo Nazrulloev
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton 
              color="inherit" 
              onClick={handleMenu}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {['Home', 'Skills', 'Works', 'Resume', 'Contact'].map((item) => (
                <MenuItem 
                  key={item} 
                  component={Link} 
                  to={`/${item.toLowerCase()}`} 
                  onClick={handleClose}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/skills">Skills</Button>
            <Button component={Link} to="/works">Works</Button>
            <Button component={Link} to="/resume">Resume</Button>
            <Button component={Link} to="/contact">Contact</Button>
          </>
        )}
        
        <IconButton 
          color="inherit" 
          onClick={toggleTheme}
          sx={{ ml: 2 }}
          aria-label="toggle theme"
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar