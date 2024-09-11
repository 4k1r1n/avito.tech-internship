import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { AppBar, Container, Toolbar } from '@mui/material'
import COLORS from '@/styles/colors'

const Layout: FC = () => {
  return (
    <>
      <AppBar sx={{
        position: 'fixed',
        display: 'flex',
        bgcolor: COLORS.white,
        boxShadow: 'none',
        alignItems: 'center',
      }}>
        <Toolbar
          component='nav'
          sx={{
            gap: '1rem',
          }}
        >
          <Navigation />
        </Toolbar>
      </AppBar>
      <Container
        component='main'
        sx={{
          flexGrow: '1',
          padding: '8rem 0 2rem',
        }}
      >
        <Outlet />
      </Container>
    </>
  )
}

export default Layout