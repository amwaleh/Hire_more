import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import basePage from 'hoc/BasePage'
import Segment from 'simple-components/Segment'
import Button from 'simple-components/Button'
import Title from 'simple-components/Title'
import Article from 'simple-components/Article'
import Text from 'simple-components/Text'
import { SignUpForm, HowItWorks } from './Devs'

const ActionButtons = styled.div`
  padding: 24px 0 0 0;
`
const LearnMore = styled.a`
  margin-left: 40px;
`

const SegmentTop = Segment.extend`
    @media only screen and (max-width:768px){
        display: none;
    }
`

const MentorshipPhoto = styled.div`
    display: block;
    padding: 125px;
    background-image: url('https://picsum.photos/300?image=225');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (max-width:768px){
        display: none;
    }
    @media only screen and (min-width:1024px){
        padding: 180px;
    }
`

const Div = styled.div`
    display: block;
    padding: 190px;
    background-image: url(${props => props.image});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (max-width:768px){
        padding: 150px;
    }

    @media only screen and (min-width:1024px){
        padding: 250px;
    }
`
https://github.com/amwaleh/sandbox
https://github.com/amwaleh/Redux-movie-app
class ExploreDevs extends Component {
  render () {
    return (
      <div >
        <SegmentTop scroll='hidden' p={2}>
          <div style={{ height: '500px', paddingTop: '150px', paddingLeft: '8rem' }}>
            <Title>Become Africa’s <br />next leading CTO </Title>
            <Article width={[1, 400, 500, 800]}>
              <Text>
                  As a Spark developer, you’ll experience a life-changing career opportunity in Europe.
                At the same time, you’ll gain the knowledge, insight and network to contribute to Africa’s growing tech-ecosystem.
              </Text>
              <ActionButtons>
                <Button bg='red' color='white'>
                    Become a Spark                  </Button>
                <LearnMore>
                    Learn More <span> &#8595;</span>
                </LearnMore>
              </ActionButtons>
            </Article>
          </div>
        </SegmentTop>
        <HowItWorks />
        <Segment scroll='hidden'>
          <Flex flexDirection={['column', 'column', 'row']} justifyContent='space-between' pt={1} >
            <Box width={[1, 1, 1 / 2]} order={1}>
              <Box alignSelf='flex-start' ml={[1, 0, 4]} mr={[1, 0, 0]} p={2}>
                <h2>Experience growth like never before</h2>
                <Text>
                At Spark, we emphasise three things: Character growth, career growth, and community growth.
                </Text>
                <p />
              </Box>
              <Box order={3} style={{overflow: 'hidden'}}>
                <Div image='https://picsum.photos/500/300?image=433' />
              </Box>
            </Box>
            <Box width={[1, 1, 1 / 3]} order={2}>
              <Box ml={[1, 0, 4]} mr={[1, 0, 0]} p={2}>
                <img src='https://picsum.photos/50?image=979' />
                <p />
                <h3>International Experience</h3>
                <Text>
              As a Spark developer, you’ll be placed within the heart of Europe’s tech scene for a three year period,
              where you’ll experience enormous development milestones working for some of the largest, most tech-minded
              organizations in the world.
                </Text>
              </Box>
              <Box ml={[1, 0, 4]} mr={[1, 0, 0]} p={2}>
                <img src='https://picsum.photos/50?image=979' />
                <p />
                <h3>Personal Development</h3>
                <Text>
              You’ll take ownership of your time abroad: attending meetups, engaging with other developers, building
              your personal brand, and honing in on the leader inside of you.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Segment>
        <Segment scroll='hidden'>
          <Flex justifyContent={['flex-start', 'flex-start', 'center']} alignItems={['flex-start', 'flex-start', 'center']}>
            <Box alignSelf={['flex-start', 'flex-start', 'center']} p={[2, 2, 4]}>
              <h2>The Capsar mentorship and incubation program</h2>
            </Box>
          </Flex>
          <Flex justifyContent='space-between' flexDirection={['column', 'column', 'row']}>
            <Box width={[1, 1, 1 / 3]} >
              <Box alignSelf='flex-start' ml={[1, 0, 4]} mr={[1, 0, 0]} p={2}>
                <Text>
                    Apart from the value you’ll bring to the employer in Europe, both as a developer
                    and as community member, you’ll be part of a tight-knit group of other Spark developers.
                  <p />
                    Together, you’ll gain mentorship and guidance through the Spark community, and as you grow in
                    experience and seniority, you’ll be encouraged to become a mentor figure to new Spark developers.
                </Text>
                <p />
                <Button bg='#c31e28'>Read More</Button>
              </Box>
              <Box>
                <MentorshipPhoto />
              </Box>
            </Box>
            <Box width={[1, 1, 1 / 2]} mb={[1, 2, 8]}>
              <Box >
                <Div image='https://picsum.photos/500?image=1' />
              </Box>
              <Box ml={[1, 0, 0]} mr={[1, 0, 0]} pr={[0, 0, 2]} p={2}>
                <Text>
                Through the Spark Incubation program, you’ll be provided with seed funding of up to $ 30 000,
                with which you’ll be empowered to contribute to and grow the African tech ecosystem. In doing so, you’ll directly be contributing to employment in Africa through entrepreneurship.
                  <p />
                With the experience, knowledge, and network that you’ve made abroad, you’ll be in the right position to
                establish yourself as an international tech leader, digital entrepreneur, CEO or CTO.
                  <p />
                </Text>
              </Box>
            </Box>
          </Flex>
        </Segment>
        <SignUpForm />
      </div>
    )
  }
}

export default basePage()(ExploreDevs)
