import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Slide from './dev-slide'
import slideDetails from 'constants/devs'

class ExploreDevs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSlide: 0,
    }
  }

    next = () => {
      this.setState({
        currentSlide: this.state.currentSlide + 1,
      })
    }

    prev = () => {
      this.setState({
        currentSlide: this.state.currentSlide - 1,
      })
    }

    updateCurrentSlide = (index) => {
      const { currentSlide } = this.state

      if (currentSlide !== index) {
        this.setState({
          currentSlide: index,
        })
      }
    }

    render () {
      return (
        <div>
          <Carousel
            autoPlay
            transitionTime={500}
            interval={6000}
            infiniteLoop
            stopOnHover
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            selectedItem={this.state.currentSlide}
            onChange={this.updateCurrentSlide}
            {...this.props}>
            { slideDetails.map((content, key) => <Slide key={key} {...content} prev={this.prev} next={this.next} currentSlide={this.updateCurrentSlide} />) }
          </Carousel>
        </div>
      )
    }
}

export default ExploreDevs
