import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { width, flex, space } from 'styled-system'

const Nav = styled(Flex)`
    flex-direction: row; 
    justify-content: space-between; 
    padding-top: 1rem;
    align-items: center;
    background-color: transparent;
    overflow: hidden;
    position: fixed;
    transition: top 0.3s;

    ${width}
    ${flex}
    ${space}
`

export default Nav
