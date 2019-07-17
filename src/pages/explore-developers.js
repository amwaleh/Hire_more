import React, { Component, Fragment } from 'react'
import Segment from 'simple-components/Segment'
import basePage from 'hoc/BasePage'
import { ExploreDevs } from './ExploreDevs'

class ExploreDevelopers extends Component {
  render () {
    return (
      <Segment py={4}>
        <ExploreDevs />
      </Segment>
    )
  }
}

export default basePage()(ExploreDevelopers)
