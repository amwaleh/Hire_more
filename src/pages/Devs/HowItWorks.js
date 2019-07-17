import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import Segment from 'simple-components/Segment'
import HR from 'simple-components/HR'

const Header = styled(Box)`
    justify-content: center;
    height: 52px;
    font-family: Manrope;
    font-size: 3rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.81;
    letter-spacing: -1.5px;
    text-align: center;
    color: #ffffff;
`

const HowItWorks = () => {
  return (
    <Segment bg='#ff7d46' maxheight='40rem' mt={['4rem', '4rem', 0]} p={1}>
      <Header>How it works</Header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
        >
          <h3 className='vertical-timeline-element-title'>Apply</h3>
          <p>
              Drop us a link to your public code repository (Github is easiest),
              and we’ll let you know if you’ve got the experience we’re looking for.
          </p>
          <HR />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
        >
          <h3 className='vertical-timeline-element-title'>Make a Profile</h3>
          <p>
              If you’ve got the right experience, we’ll ask you to take on the Spark developers Challenge (a short assessment),
              after which you’ll be able to make your own public profile on our platform.
          </p>
          <HR />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
        >
          <h3 className='vertical-timeline-element-title'>Your first interview</h3>
          <p>
              If you’ve got the right experience, we’ll ask you to take on the Spark developers Challenge (a short assessment),
              after which you’ll be able to make your own public profile on our platform.
          </p>
          <HR />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
        >
          <h3 className='vertical-timeline-element-title'>Get hired</h3>
          <p>
              If both you and the hiring partner are confident in moving forward, we’ll assist with your relocation,
              and you’ll be set up in a European tech hub!
          </p>
          <HR />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Segment>
  )
}

export default HowItWorks
