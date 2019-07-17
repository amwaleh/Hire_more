import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Carousel } from 'react-responsive-carousel'
import PartnerStrip from '../partnerStrip'
import CarouselContent from './CarouselContent'

/* eslint no-multi-str: 0 */

const TestimonialCaurosel = styled(Carousel)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.29);
  max-width: 80vw;
`

const Image1 = '../static/images/newnarrative-1.jpg'
const Image2 = '../static/images/newnarrative-2.jpg'
const Image3 = '../static/images/newnarrative-3.jpg'
const body =
  'I think it will work really nice if you have 3 quotes of existing\
clients already recommending this as a service quite early on.\
Creating trust.'

// TODO: move this to Json file
const content = [
  {
    image: Image2,
    name: 'milly',
    position: 'CEO - SparkCoding INT',
    body:
      'It takes hard work to improve the conceptual compression \
      algorithms that alleviate application programmers from having \
      to worry about the underpinnings most of the time, but it’s \
      incredibly rewarding work. The more effectively we compress \
      the concepts of yesterday, the lower the barriers to entry become. \
      And we need low barriers if we are to get more people started making \
      applications.',
  },
  {
    image: Image1,
    name: 'milly',
    position: 'CEO - SparkCoding INT',
    body,
  },
  {
    image: Image3,
    name: 'milly',
    position: 'CEO - SparkCoding INT',
    body,
  },
]

const partnerLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png',
  'http://pngimg.com/uploads/twitter/twitter_PNG29.png',
  'https://www.python.org/static/opengraph-icon-200x200.png',
  'https://cdn.iconscout.com/icon/free/png-256/ruby-45-1175100.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
  'https://cdn-images-1.medium.com/max/1600/0*wP-f_NZgNXW0tJMw.png',
  'http://www.censordodge.mede8er.click/?cdURL=aHR0cHM6Ly93d3cuZG9ja2VyLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3NvY2lhbC9kb2NrZXJfZmFjZWJvb2tfc2hhcmUucG5n'
  ]

const Testimonial = () => {
  return (
    <div>
      <PartnerStrip logos={partnerLogos} />
    </div>
  )
}

export default Testimonial
