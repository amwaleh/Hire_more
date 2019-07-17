import Carousel from 'containers/Carousel'

const slideDetails = [
  {
    header: 'Meet the developer',
    body:
      'Provide us with the job body that you’re looking for, or browse through our list of developers to find your perfect match. ',
  },
  {
    header: 'Schedule an interview',
    body:
      'Once a match looks good for both parties, easily schedule an interview with the developer of your choice.We encourage you to send through your technical assessment upfront.',
  },
  {
    header: 'Hire and onboard',
    body:
      'If both you and the developer are confident in moving forward, Spark will assist with the legalities of the employment and relocation processes. ',
  },
  {
    header: 'Grow and Build',
    body:
      'For three years, experience Spark’s technical and interpersonal contribution to your company’s product and culture',
  },
]
const title = 'How it works'
const caption = 'Hiring Spark Developers is a seamless process.'
const CarouselSection = () => <Carousel title={title} caption={caption} slideDetails={slideDetails} style={{'height':'600px'}}/>
export default CarouselSection
