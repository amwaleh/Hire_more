import { Flex, Box } from 'grid-styled'
import Link from 'next/link'
import HR from 'simple-components/HR'
import Paragraph from 'simple-components/Paragraph'

const Footer = () => {
  return (

    <footer>
      <HR />
      <Flex flexDirection='column' mx={[0, 3, 7]} mb={[1, 2, 4]} p={2} >
        <Flex
          flexDirection={['column', 'column', 'row']}
          p={1}
          alignItems='flex-end'
        >
          <Box width={[1, 1, 1 / 2]}>
            <Paragraph color='#000' fontWeight='bold' fontSize='24px'>
              &#123;cc&#125;
            </Paragraph>
            <Paragraph>Copyright © 2018 Spark developers.</Paragraph>
            <Paragraph color='#000' fontWeight='bold'>
              <Link href='/privacy-policy'>
                Cookies Policy and Privacy Policy
              </Link> |
            </Paragraph>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Paragraph color='#000' fontWeight='bold' fontSize='14px'>
            OFFICE
            </Paragraph>
            <Paragraph>KICC Building</Paragraph>
            <Paragraph> Nairobi, Kenya</Paragraph>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Paragraph color='#000' fontWeight='bold' fontSize='14px'>
            OFFICE
            </Paragraph>
            <Paragraph>Likoni rd,</Paragraph>
            <Paragraph>Mombasa, Kenya</Paragraph>
          </Box>
        </Flex>
        <HR />
        <Box p={1}>
          <Paragraph>
            Interested in finding out more? Send us an email through
            <span style={{ color: '#000', fontWeight: 'bold' }}>
              info@spark.com{' '}
            </span>
            or reach us on{' '}
            <span style={{ color: '#000', fontWeight: 'bold' }}>
              +254 724986501
            </span>
            .
          </Paragraph>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
