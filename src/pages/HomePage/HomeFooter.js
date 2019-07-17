import { Flex, Box } from 'grid-styled'
import Link from 'next/link'
import Paragraph from 'simple-components/Paragraph'
import Button from 'simple-components/Button'

const HomeFooter = () => {
  return (
    <Flex
      flexDirection='column'
      height={426}
      mx={[0, 3, 7]}
      mb={[1, 2, 4]}
      mt={[-1, -2, -3]}
      bg='#455a64'
      p={[2, 3, 5]}
    >
      <Box width={[1, 1, '80vh']} pb={2} >
        <h1 style={{ color: '#fff' }}>Ready to grow your team with Spark?</h1>
        <Paragraph>
					Join the movement and make a valuable contribution not only to the expansion of your team, but to
					the development of Africa’s tech ecosystem.
        </Paragraph>
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <Link href='/explore-developers'>
          <Button bg='#FFC107' p='8'>
						Become a hiring partner
          </Button>
        </Link>
        <span style={{ color: '#fff', padding: 5 }}>Read the story &#10140;</span>
      </Box>
    </Flex>
  )
}

export default HomeFooter
