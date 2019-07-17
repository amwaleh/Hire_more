import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import PropTypes from 'prop-types'
import Paragraph from '../../devpool-components/simple-components/Paragraph'

const Avatar = styled(Box)`
  color: #fff;
  min-width: 300px;
  display: flex;
  flex-flow: column;
  text-align: left;
  font-size: 12px;
  padding-top: 30px;
  & .position {
    opacity: 0.8;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`
const ImgStyle = styled.img`
  .carousel .slide & {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    margin-bottom: 10px;
  }
`

const ParagraphTest = Paragraph.extend`
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.38;
  text-align: left;
  color: #fff;
  max-width: 742px;
  justify-content: center;
  display: flex;
  align-items: center;
`

const Quotes = styled.span`
  opacity: 0.2;
  font-size: 16rem;
  color: #fff;
  right: 280px;
  font-family: helvetica;
  position: relative;
  top: -179px;
  left: 39px;
  transform: scaleY(-1);
`
const CarouselContent = ({ image, body, name, position }) => (
  <Flex flexDirection={['column', 'row', 'row']}>
    <Avatar width={[1, 1, 0.25]} order={[2, 1, 1]}>
      <ImgStyle src={image} />
      <div>{name}</div>
      <div className='position'>{position}</div>
    </Avatar>
    <Box width={[1, 1, 0.75]} order={[1, 1, 1]} textalign={'left'}>
      <ParagraphTest>
        <Quotes>&#8220;</Quotes>
        {body}
      </ParagraphTest>
    </Box>
  </Flex>
)

CarouselContent.propTypes = {
  image: PropTypes.string,
  body: PropTypes.string.isRequired,
  position: PropTypes.string,
  name: PropTypes.string.isRequired,
}
export default CarouselContent
