import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6" >myapp</Typography>
                  <Link to='/signup'>
                  <Button variant="contained">Signup</Button>
                  </Link>
                  <Link to='/l'>
                      <Button variant="contained">Login</Button>
                      </Link>
                  <Link to='State'>
                  <Button variant="contained">State</Button>
                  </Link>
                  <Link to='/Welcome'>
                      <Button variant="contained">Welcome</Button>
                  </Link>
                  <Link to='/Api'>
                  <Button variant="contained">Api</Button>
                  </Link>
              </Toolbar>
          </AppBar>  
          <br /><br /><br /><br />
      </div>
  )
}

export default Navbar
