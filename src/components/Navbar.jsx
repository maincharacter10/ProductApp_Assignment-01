
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{mt:9,flexGrow: 1 }}>
      <AppBar sx={{mt:.1}}position="fixed">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ProductApp
          </Typography>
          <Button color="inherit">
            <Link 
            to={'/add'}
            style={{ textDecoration: "none", color: "white"}}>
              Add products
            </Link>
          </Button>
          <Button color="inherit">
            <Link
            to={'/'}
            style={{ textDecoration: "none", color: "white"}}>
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
