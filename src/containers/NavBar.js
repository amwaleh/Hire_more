import React from 'react'
import { node } from 'prop-types'
import Nav from 'simple-components/Nav'

const NavBar = ({ children }) => <Nav width={[1, 1, 1]} pl={[1, 1, 4]}>
  {children}
</Nav>
NavBar.propTypes = {
  children: node,
}

export default NavBar
