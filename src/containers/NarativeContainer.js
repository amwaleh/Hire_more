import React from 'react'
import { bool, func, node, object, string } from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import Paragraph from 'simple-components/Paragraph'

const Image1 = '../static/images/newnarrative-1.jpg'
const Image2 = '../static/images/newnarrative-2.jpg'
const Image3 = '../static/images/newnarrative-3.jpg'

const imgStyle = {
  width: '100%',
  height: 'auto',
}

const Narrative = () => {
  return (
    <Flex
      flexDirection={['column', 'row', 'row']}
      alignItems='flex-end'
    >
      <Box width={[1, 1, 0.75]}>
        <img src={Image1} style={imgStyle} />
      </Box>
      <Box width={[1, 1, 0.75]} pl={[0.3, 1, 2]}>
        <h2>A new Narrative</h2>
        <Paragraph>
                    The gap between demand and supply for software developers in Europe is estimated to be around 500.000 by 2020.
          <br />
          <br />
                    Spark developers narrows this gap by tapping into the exploding tech scene Sub-Saharan Africa, of which more than 60% of the population is under the age of 25.
        </Paragraph>
        <img src={Image2} style={imgStyle} />
      </Box>
      <Box width={[1, 1, 0.75]} pl={[0.3, 1, 2]}>
        <Paragraph>
                    Although this is highly beneficial to Europe’s growing ecosystem, our narrative and sphere of influence is fundamentally Africa-centric.
          <br />
          <br />
                    Through our incubation and mentorship programs, and in conjunction with our clients, Spark focuses largely on developing the African tech ecosystem in a sustainable and scalable way.
        </Paragraph>
        <img src={Image3} style={imgStyle} />
      </Box>
    </Flex>
  )
}


export default Narrative
