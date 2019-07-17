import styled from 'styled-components'
import { width, color, flex, space } from 'styled-system'

const MenuItem = styled.span`
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  font-size: 16px;
  font-family: helvetica;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #463737;
  cursor: pointer; 

  ${width}
  ${color}
  ${space}
`

export default MenuItem
