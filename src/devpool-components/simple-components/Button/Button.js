import styled from 'styled-components'
import { textAlign, space, zIndex, width, color } from 'styled-system'

const Button = styled.button`
  color: ${props => (props.inverted ? props.bg : '#fff')};
  background-color: ${props => (props.inverted ? 'transparent' : '#6E6E6E')};
  border-width: ${props => (props.inverted ? '0.1em' : 0)};
  border-color: ${props => (props.inverted ? '#6E6E6E' : '#fff')};
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.01em;
  padding: 1em 1.2em;
  transition-duration: 200ms;
  transition-property: color, background-color, fill;
  transition-timing-function: ease;
  cursor: pointer;
  box-shadow: -1px 0px 2px 0px #00000094;
  ${textAlign};
  ${space};
  ${zIndex};
  ${width};
  ${color};
  ${space};
`

export default Button
