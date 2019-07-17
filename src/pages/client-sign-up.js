import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Dimmer, Header, Image, Button } from 'semantic-ui-react'
import basePage from 'hoc/BasePage'
import Jumbotron from 'simple-components/Jumbotron'
import { ClientForm } from './ClientSignUp'
import Segment from 'simple-components/Segment'

const divStyle = {
  opacity: '0.6',
  backgroundColor: 'rgba(85, 125, 70, 0.6)',
  color: 'rgb(85,125,70)',
}


class ClientSignUp extends Component {
  render () {
    return (
      <Segment bg='#f1f1f1' scroll='hidden'>
        <Dimmer.Dimmable style={divStyle}>
          <Jumbotron image='https://picsum.photos/2048/1367?image=670'>
            <Header as='h1'>Become a Spark</Header>
          </Jumbotron>
          <Dimmer active />
        </Dimmer.Dimmable>
        <ClientForm />
      </Segment>
    )
  }
}

export default basePage()(ClientSignUp)
