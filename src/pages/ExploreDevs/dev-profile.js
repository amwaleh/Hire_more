import React from 'react'
import { string, array } from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Button, Header, Icon, Image, Modal, List, Item, Rating } from 'semantic-ui-react'
import Paragraph from 'simple-components/Paragraph'
import HR from 'simple-components/HR'


const NameSubHeader = styled.div`
    text-align: left;
    font-weight: bold;
    padding: -0.1px;
    text-transform: uppercase;
    font-size: 14px;
    color: #039BE5;
    font-weight: normal;
`

const Languages = styled.text`
    color: #ffff;
    padding: 4px;
    margin-right: 4px;
    margin-bottom: 4px;
    margin-top: 4px;
    opacity: 0.4;
    border-radius: 2px;
    background-color: #000;
`

const ExpDiv = styled(Flex)`

`

const DevProfile = ({header, title, experience, img, stacks, description, experiences, education, languages}) => (
  <Modal defaultOpen closeIcon>
    <Modal.Content image>
      <Image wrapped size='small' src={img} circular />
      <Modal.Description>
        <Header>{header}</Header>
        <NameSubHeader>{title} . {experience}</NameSubHeader>
        <Paragraph>{description}</Paragraph>
        <br />
        {stacks.map((stack, i) => <Languages key={i}>{stack}</Languages>)}
        <HR />
        <ExpDiv flexDirection='column'>
          <Box>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Meta>
                    <span className='stay'>01</span>
                  </Item.Meta>
                  <Item.Header>Experience</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
            <List>
              { experiences.map((content, i) => (
                <List.Item key={i}>
                  <List.Content>
                    <List.Header as='a'>{content.company}</List.Header>
                    <List.Content floated='right'>{content.startDate} - {content.endDate}</List.Content>
                    <List.Description>{content.title}</List.Description>
                  </List.Content>
                  <br />
                  {
                    content.roles.map((role, i) => (
                      <List.Item as='li' key={i}>{role}</List.Item>
                    ))
                  }
                  <br />
                  <HR />
                </List.Item>
              ))
              }
            </List>
          </Box>
          <Box>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Meta>
                    <span className='stay'>02</span>
                  </Item.Meta>
                  <Item.Header>Education</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
            <List>
              { education.map((content, i) => (
                <List.Item key={i}>
                  <List.Content floated='right'>{content.year}</List.Content>
                  <List.Header as='a'>{content.school}</List.Header>
                  <List.Content floated='left'>{content.course}</List.Content>
                  <br />
                  <HR />
                </List.Item>
              ))
              }
            </List>
          </Box>
          <Box>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Meta>
                    <span className='stay'>03</span>
                  </Item.Meta>
                  <Item.Header>Languages</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
            <List horizontal>
              { languages.map((content, i) => (
                <List.Item key={i}>
                  <List.Content>
                    <List.Content floated='left'>
                      <List.Header as='a'>{content.language}</List.Header>
                    </List.Content>
                    <List.Content floated='right'>
                      <Rating icon='star' defaultRating={content.rate} maxRating={5} size='large' />
                    </List.Content>
                  </List.Content>
                  <br />
                  <HR />
                </List.Item>
              ))
              }
            </List>
          </Box>
        </ExpDiv>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Link href='https://calendly.com/sebastiaan-tan'>
        <a target='_blank'>
          <Button color='red'>
            Hire me <Icon name='right chevron' />
          </Button>
        </a>
      </Link>
    </Modal.Actions>
  </Modal>
)

DevProfile.propTypes = {
  header: string,
  title: string,
  experience: string,
  img: string,
  stacks: array,
  description: string,
  experiences: array,
  education: array,
}

export default DevProfile
