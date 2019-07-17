import React from 'react'
import styled from 'styled-components'
import {width, space, color} from 'styled-system'
import { Flex, Box } from 'grid-styled'
const Sections = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  ${width}
  ${space}
  ${color}
`

const Section = ({children, image, bg, width}) => (
  <Flex bg={image}>
    <Box width={[1, 1, 1]} pl={[1, 1, 4]} >
      <Sections image={image} bg={bg} width={width}>
        {children}
      </Sections>
    </Box>
  </Flex>
)

export default Section
