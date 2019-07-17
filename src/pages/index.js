import React, { Component, Fragment } from 'react'
import basePage from 'hoc/BasePage'
import { Segment } from 'simple-components'
import Narrative from 'containers/NarativeContainer'
import { Home, CarouselSection } from './HomePage'
import Testimonial from 'containers/Testimonial'
import HomeFooter from './HomePage/HomeFooter'


class HomePage extends Component {
  render () {
    return (
      <Fragment>
        <Home />

        <Segment px={[1, 3, 7]} pb='5rem' maxHeight='30rem'>

        </Segment>

        <Segment px={[1, 3, 7]} pb='5rem' maxHeight='30rem'>
          <Narrative />
        </Segment>
        <Segment
          bg='#039BE5'
          px={[1, 3, 7]}
          pb={[1, 2, 5]}
          pl={0}
          maxHeight='800'
        >
          <Testimonial />
        </Segment>
        <HomeFooter />
      </Fragment>
    )
  }
}

export default basePage()(HomePage)
