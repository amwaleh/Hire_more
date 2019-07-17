import React from 'react'
import { bool, func } from 'prop-types'
import Router from 'next/router'
import { Flex } from 'grid-styled'
import { MenuItem, MenuIcon } from 'simple-components'


class MobileMenuContent extends React.Component {
  state = {};

  transitionTo = route => Router.push(route);

  handleItemClick = (e, { name }) => {
    if (name === 'logout') {
      this.props.onToggleSidebar()
      return
    }

    this.setState({ activeItem: name })
    this.props.onToggleSidebar()
    this.transitionTo('/' + name)
  };

  handleLogoutClick = () => {};

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <MenuItem flexDirextion='column' justifyContent={'flex-start'}>
          <MenuItem m={1}>Home</MenuItem>
          <MenuItem m={1}> about</MenuItem>
          <MenuItem m={1}>Explore Developers</MenuItem>
        </MenuItem>
        <style jsx>{`
          .ui.menu {
            font-weight: bold;
            background-color: red;
          }
        `}</style>
      </div>
    )
  }
}

MobileMenuContent.propTypes = {
  onToggleSidebar: func.isRequired,
}

export default MobileMenuContent
