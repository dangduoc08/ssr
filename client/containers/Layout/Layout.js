import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Header, Container } from './components'
import { layoutRoutes } from '../../routers'

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Container>
        {renderRoutes(layoutRoutes)}
      </Container>
    </div>
  )
}

export default Layout