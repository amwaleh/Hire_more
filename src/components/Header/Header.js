import React, { Component } from 'react'

import MenuItems from '../MenuItems'
import { Button, Grid, Menu } from 'semantic-ui-react'

export default class Header extends Component {
  render () {
    return (
      <Grid stretched style={{ position: 'fixed', width: '100%' }} >
        <Grid.Row centered only='computer tablet'>
          <Grid.Column computer='13'>
            <Menu secondary borderless>
              <MenuItems />
              <Menu.Menu position='right'>
                <Menu.Item href='/devs-main-page' link>
                  <Button primary>I'm a developer</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
