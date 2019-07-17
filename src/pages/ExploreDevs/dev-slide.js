import React, { Component} from 'react'
import Link from 'next/link'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { Image, Button } from 'semantic-ui-react'
import { string, array, func } from 'prop-types'
import Paragraph from 'simple-components/Paragraph'
import slideDetails from 'constants/devs'
import DevProfile from './dev-profile'

const NameHeader = styled.p`
    text-align: left;
    font-weight: bold;
    padding: -0.1px;
    font-size: 18px;
    text-transform: uppercase;
`

const NameSubHeader = NameHeader.extend`
    font-size: 14px;
    color: #039BE5;
    font-weight: normal;
`

const Languages = styled.span`
    color: #ffff;
    padding: 4px;
    margin-right: 4px;
    margin-bottom: 4px;
    margin-top: 4px;
    opacity: 0.4;
    border-radius: 2px;
    background-color: #000;
`

const ImageBox = styled(Box)`
    overflow: hidden;
    padding: 4px;
`

const P = styled.span`
    color: #ffff;
`

const Lang = styled.div`
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`

const DevBox = styled(Flex)`
    text-align: left;
    background-color: #039BE5;
    justify-content: space-around;
    overflow: hidden;
    flex-wrap: wrap;
`

const DevScard = styled(Box)`
    flex: 1;
    padding: 1rem;
`
const ButtonScroll = styled.button`
    font-weight: bold;
    font-size: 28px;
    padding: 5px 20px ;
    margin: 5px 0px;
`

const ButtonContainer = styled.div`
    margin: 0px;
    text-align: right;
`

const L = styled.div`
    text-align: left;
`

class Slide extends Component {
    state = {
      showModal: false,
    }
    render () {
      const {header, title, experience, img, stacks, description, prev, next, currentSlide} = this.props
      const { showModal } = this.state
      return (
        <Flex pt={[1, 2, 5]} flexDirection={['column', 'column', 'row']} >
          <ImageBox width={[1, 1, 1 / 3]} pr={2}>
            <Image src={img} wrapped size='medium' circular />
          </ImageBox>
          <Box width={[1, 2 / 3, 2 / 3]} alignitems='flex-start' p={1}>
            <Flex flexDirection={['column', 'row', 'row']} p={1} style={{height: '70%'}}>
              <Box width={[1, 2, 0.8]} order={[2, 1, 1]}>
                <NameHeader>{header}</NameHeader>
                <NameSubHeader>{title} . {experience}</NameSubHeader>
                <Paragraph>{description}</Paragraph>
                <L>
                  <DevScard>
                    {stacks.map((stack, i) => <Languages key={i}>{stack}</Languages>)}
                  </DevScard>
                  <br />
                  <div style={{padding: '4px', fontSize: '16px', color: 'red'}} >
                    <Button
                      style={{padding: '4px', fontSize: '16px', color: 'red'}}
                      onClick={() => this.setState({showModal: !showModal})}>
                      Learn more
                    </Button>
                    <span style={{width: '40px', lineHeight: '1px'}}>------</span>
                    <span style={{color: '#000', padding: '2px'}}>or</span>
                    <Link href='https://calendly.com/sebastiaan-tan'>
                      <a target='_blank'>
                        <Button color='red'>Hire me</Button>
                      </a>
                    </Link>
                  </div>
                </L>
              </Box>
              <Box width={[1, 2, 0.2]} order={[2, 1, 1]} alignitems='lef'>
                <ButtonContainer>
                  <ButtonScroll onClick={prev}>{'<'}</ButtonScroll>
                  <ButtonScroll onClick={next}>{'>'}</ButtonScroll>
                </ButtonContainer>
              </Box>
            </Flex>
            <DevBox width={[0, 1, 1]} style={{height: '40%'}}>
              {slideDetails.map((details, i) => <DevScard key={i} onClick={() => currentSlide(i)}>
                <Image src={details.img} size='tiny' verticalAlign='middle' /><br />
                <P>{details.header}</P><br />
                <P>{details.title}</P><br />
                <Lang>{stacks.map((stack, i) => <Languages key={i}>{stack}</Languages>)}</Lang>
              </DevScard>
              )}
            </DevBox>
          </Box>
          { this.state.showModal ? <DevProfile {...this.props} /> : null }
        </Flex>
      )
    }
}

Slide.propTypes = {
  header: string,
  title: string,
  experience: string,
  img: string,
  stacks: array,
  description: string,
  prev: func,
  next: func,
  currentSlide: func,
}

export default Slide
