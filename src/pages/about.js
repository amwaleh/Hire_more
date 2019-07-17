import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import basePage from 'hoc/BasePage'
import Text from 'simple-components/Text'
import Segment from 'simple-components/Segment'
import { Button, Icon } from 'semantic-ui-react'
import HR from 'simple-components/HR'

const H2 = styled.h2`
  text-align: ${props => props.textAlign || 'left'};
  font-size: 3rem;
  margin: ${props => props.margin || 'initial'};
`

const P = styled.p`
  color: #fff;
  text-align: center;
  margin: 18px 0 82px 0 !important;
`

const Imagesegment = styled.div`
  background-image: url('https://images.unsplash.com/photo-1455719103652-8c015f564e2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=361cd2dc22efed1c4f8149b1dfff409e&auto=format&fit=crop&w=2978&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 32rem;
  height: 722px;
`
const ImageHolder = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: ${props => props.height};
  min-height: 200px;
  padding-bottom: 50%;
`
const IconBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 0 10% 0 0;
  margin: 50px 0;
`
class About extends Component {
  render () {
    return (
      <Fragment>
        <Segment mx={[1, 0, 0, 1]} scroll='hidden' pt={[10, 10, 100]}>
          <H2 textAlign={'center'}>We are Spark </H2>
          <P style={{ color: '#039BE5' }}>
            A community of international, like-minded tech enthusiasts with a
            vision.
          </P>
        </Segment>
        <Imagesegment
          scroll='hidden'
          minheight='32rem'
          bgImage='https://picsum.photos/500/300?image=433'
        />
        <Segment mx={[1, 0, 0, '4rem']} scroll='hidden' pt={[10, 10, 100]}>
          <Flex flexDirection={['column', 'column', 'row']} px={[1, 2, 4]}>
            <Box width={[1, 1, 1 / 2]} p={[1, 2, 2]} mt={-67}>
              <Box py={[4, 3, 3]}>
                <H2>Tech development in Africa</H2>
              </Box>
              <Text>
                In Africa, digital transformation is rapidly catching up, whilst
                the ‘underdog’ narrative is beginning to change. Home to over
                200 innovation hubs, over 3500 tech ventures, and the second
                largest youth population in the world (after Asia), the
                continent is undergoing its own ‘tech renaissance’.
                <br />
                <br />
                With a budding community of software developers, innovators,
                futurists and entrepreneurs, the African continent is now in the
                position to rewrite its own narrative.
              </Text>
            </Box>
            <Box width={[1, 1, 1 / 2]} p={[1, 2, 2]}>
              <Text maxWidth={'432px'}>
                This, in conjunction with improved access to the internet,
                education and public policy management, will result in the
                empowerment of upcoming generations, enabling people to benefit
                from better employment opportunities, access to resources, and
                ultimately better living standards.
              </Text>
              <Box width={[1, 1, 1]} py={[4, 4, 2]}>
                <IconBar>
                  <Icon name='computer' size='huge' color='green' />
                  <Icon
                    name='long arrow alternate right'
                    size='large'
                    color='green'
                  />
                  <Icon name='world' size='huge' color='green' />
                  <Icon
                    name='long arrow alternate right'
                    size='large'
                    color='green'
                  />
                  <Icon name='shield' size='huge' color='green' />
                </IconBar>
              </Box>
            </Box>
          </Flex>

          <Flex px={[1, 2, 4]} my={[0, 0, 4]} flexDirection='column'>
            <Box width={[1, 1, 1 / 3]} px={[1, 2, 2]}>
              <H2 size='huge'>The other side of the story</H2>
            </Box>
            <Flex width={1} flexDirection={['column', 'column', 'row']}>
              <Box width={[1, 1, 1 / 3]} p={[1, 2, 2]}>
                <Text>
                  In Europe, ‘tech’ has gone beyond being its own industry to
                  being a foundational and underlying component of every single
                  business, industry and societal institution. From startups to
                  banks and from private- to public sector businesses, European
                  organizations have all begun to acknowledge the many ways in
                  which technology has interwoven itself into everyday life.
                </Text>
              </Box>
              <Box width={[1, 1, 1 / 3]} p={[1, 2, 3]}>
                <Text>
                  Based on this, the demand for human capital in the technology
                  sector has risen exponentially, with almost every business
                  being in search of software engineers, front- and back-end
                  developers, data scientists or system architects.
                </Text>
              </Box>
              <Box width={[1, 1, 1 / 3]} p={[1, 2, 3]}>
                <Text>
                  Europe’s own population is not large enough to meet this
                  demand, with an estimated skills shortage of 500 000
                  developers on the horizon by 2020.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <HR />
        </Segment>
        <Segment ml={[1, 0, 0, '4rem']} scroll='hidden' pt={[10, 10, 100]}>
          <Flex
            justifyContent={['flex-start', 'flex-start', 'center']}
            alignItems={['flex-start', 'flex-start', 'center']}
          >
            <Box
              alignSelf={['flex-start', 'flex-start', 'center']}
              ml={[1, 0, 0]}
              mr={[1, 0, 0]}
              pb={[1, 2, 6]}
            >
              <H2>Where do we come in? </H2>
            </Box>
          </Flex>
          <Flex
            justifyContent='space-between'
            flexDirection={['column', 'column', 'row']}
            mb={[1, 1, '8em']}
            ml={0}
          >
            <Box width={[1, 1, 1 / 3]} pl={0} ml={0}>
              <Box ml={[1, 0, 4]} mr={[0, 0, 0]} p={[1, 2, 1]}>
                <Text>
                  At Spark, we’re on a mission to grow Africa’s tech ecosystem
                  by consolidating the skills shortage in Europe with the vast
                  pool of tech talent situated in Africa.
                  <br />
                  <br />
                  By providing experienced, skilled African developers with
                  three-year employment contracts in the European city of their
                  choice, we’re not only doubling the average developer
                  retention rate to the benefit of our hiring partners, we’re
                  enabling African developers to learn and grow in one of the
                  fastest-growing startup ecosystems in the world.
                </Text>
              </Box>
              <Box alignSelf='flex-end' py={2}>
                <ImageHolder
                  src='https://images.unsplash.com/photo-1521623253144-c84a4fdf2af4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68d753590e80cb154fcd3f76e1f48e3f&auto=format&fit=crop&w=2500&q=80'
                  width={'579px'}
                  height={'500px'}
                />
              </Box>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <Box>
                <ImageHolder
                  src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=2850&q=80'
                  width={'793px'}
                  height={'460px'}
                />
              </Box>
              <Box pr={[0, 0, 4]} p={[2, 2, 0]} pt={[1, 1, 4]}>
                <Text>
                  Our developers are placed at some of Europe’s most
                  technologically advanced companies, enabling them to work with
                  the best programs, learn from industry leaders, and build the
                  necessary skills required to become authoritative voices in
                  Africa’s development narrative.
                  <br />
                  <br />
                  Through the Spark mentorship and company-builder program, we
                  then fund and support our developers with their own tech
                  ventures upon their return to African.
                  <br />
                  <br />
                  In doing so, we’re facilitating a positive feedback loop of
                  employment, entrepreneurship and ultimately, growth.
                  <br />
                  <br />
                </Text>
                <Box pt={[2, 4, '4rem']}>
                <Link href='/devs-main-page'>
                    <Button
                        color='google plus'
                        width={300}
                        style={{ marginBottom: '5px' }}
                    >
                        Become a Spark Developer
                    </Button>
                  </Link>
                  &nbsp;
                  <Link href='/explore-developers'>
                    <Button color='green' width={300}>
                        Become a Hiring Partner
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Segment>
      </Fragment>
    )
  }
}

export default basePage()(About)
