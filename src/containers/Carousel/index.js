import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Icon } from 'semantic-ui-react'

const Slider = styled(Grid.Row)`
margin 0 auto;
&:before {
  overflow: hidden;
}

`

const SlideWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  overflow: hidden;
  & > img {
    flex: 1;
    min-width: 268px;
  }
`

const CarouselBody = styled(Grid)`
  padding: 0;
  overflow-x: none;
`
const Container = styled.div`
  transform: translateX(-${props => 600 * props.index || 1}px);
  transition: transform 2s cubic-bezier(0.45, -0.03, 0.515, 0.955);
  display: flex;
`

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 620px;
  height: 322px;
  color: #fff;
  0px 30px;
  position: relative;
  left: 10px;
  transition: background-color 3s ease 0.5s;
  &.active {
    background-color: #000;
    opacity: 1;
    transition: all 3s ease ;
  }
`

const SlideHeader = styled.h1`
  height: 28px;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.88;
  letter-spacing: normal;
  color: #039BE5; // use theme
  position: relative;
  left: -80px;
  .active & {
    left: -80px;
    height: 32px;
    line-height: 1;
    letter-spacing: normal;
    color: #ffffff; // use theme
  }
`

const SliderContent = styled.p`
  width: 432px;
  height: 120px;
  opacity: 0.4;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  .active & {
    opacity: 0.6;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`

const SlideNumber = styled.label`
  width: 29px;
  opacity: 0.6;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  left: -20px;
  position: relative;
  color: #c31e28;
  .active & {
    color: #fff;
  }
`

const SlideBody = styled.div`
  border-bottom: 2px solid #000;
  .active & {
    border-bottom: 5px solid #039BE5;
  }
`

const CarouselCaption = styled(Grid.Column)`
  display: flex !important;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-width: 593px;
  font-size: 64px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.81;
  letter-spacing: -1.5px;
  text-align: left;
  color: #000000;
`

const CarouselHeader = styled(Grid.Row)`
  justify-content: center;
  & span {
    margin-top: 13px;
    opacity: 0.5;
    padding-left: 14px;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    top: -22px;
    position: relative;
  }
`

const Navigation = styled(Grid.Column)`
  padding-top: 20px;
  text-align: center !important;
`

const Slide = ({ header, body, index, currentIndex, onClick }) => (
  <Rectangle
    className={currentIndex === index ? `active` : ''}
    Role='presentation'
    onClick={onClick}
    mobile='16'
  >
    <SlideBody >
      <SlideHeader>
        <SlideNumber>{index > 9 ? index + 1 : `0${index + 1}`}</SlideNumber>
        {header}
      </SlideHeader>
      <SliderContent mobile='16'>{body}</SliderContent>
    </SlideBody>
  </Rectangle>
)

Slide.propTypes = {
  header: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  index: PropTypes.number,
  currentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func,
}

export default class Carousel extends Component {
  static propTypes = {
    slideDetails: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    caption: PropTypes.string,
    title: PropTypes.string,
  }

  state = {
    currentIndex: 0,
  }

  goToNext = () => {
    this.setState(
      (prevState, props) =>
        prevState.currentIndex >= props.slideDetails.length - 1
          ? { currentIndex: 0 }
          : { currentIndex: prevState.currentIndex + 1 }
    )
  }

  goToPrevious = () => {
    this.setState(
      (prevState, props) =>
        prevState.currentIndex <= 0
          ? { currentIndex: props.slideDetails.length - 1 }
          : { currentIndex: prevState.currentIndex - 1 }
    )
  }

  render () {
    return (
      <CarouselBody centered>
        <CarouselHeader centered>
          <Grid>
            <CarouselCaption>{this.props.title}</CarouselCaption>
            <Grid.Column only='computer' computer='9'>
              <span>{this.props.caption}</span>
            </Grid.Column>
          </Grid>
          <Navigation computer={4} mobile='15'>
            <Icon onClick={this.goToPrevious} name='chevron left' size='huge' />
            <Icon onClick={this.goToNext} name='chevron right' size='huge' />
          </Navigation>
        </CarouselHeader>
        <Slider>
          <SlideWrapper>
            <Container index={this.state.currentIndex}>
              {this.props.slideDetails.map((details, index) => (
                <Slide
                  key={`Slide-${index}`}
                  onClick={this.goToNext}
                  index={index}
                  {...details}
                  currentIndex={this.state.currentIndex}

                />
              ))}
            </Container>
          </SlideWrapper>
        </Slider>
      </CarouselBody>
    )
  }
}
