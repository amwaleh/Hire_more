import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'
import MenuItems from 'components/MenuItems'

export default class SidebarMenu extends Component {
  state = { visible: false }
  handleButtonClick = () => {
    console.log(this.state)
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  }

  handleSidebarHide = () => this.setState({ visible: false })
  PropTypes = {
    children: PropTypes.node.isRequired,
  }
  render () {
    const { visible } = this.state
    const { children } = this.props

    return (
      <Grid style={{border: 0}}>
        <Grid.Row only='mobile'>
          <Grid.Column floated='right' width='4' style={{top: '16px' }}>
            <Icon
              name='sidebar'
              size='large'
              onClick={this.handleButtonClick}

            />
          </Grid.Column>
        </Grid.Row>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            floated='right'
          >
            <MenuItems />
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid>
    )
  }
}
