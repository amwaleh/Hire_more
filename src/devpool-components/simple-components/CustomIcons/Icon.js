import styled from 'styled-components'
import { space, position, bottom, zIndex, color } from 'styled-system';

const Icon = styled.svg.attrs({ xmlns: 'http://www.w3.org/2000/svg' })`
  width: ${props => props.width};
  height: ${props => props.height};
  ${zIndex};
  ${space};
  ${bottom};
  ${position};
  ${color}
`

export default Icon
