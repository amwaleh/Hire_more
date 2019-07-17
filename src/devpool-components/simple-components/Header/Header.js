import styled from 'styled-components';
import { textAlign, space, zIndex, width, color } from 'styled-system';

const Header = styled.h1`
  color: ${props => (props.inverted ? '#fff' : '#000')};
  background-color: ${props => (props.inverted ? props.bg : 'transparent')};
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: -2px;
  font-family: Manrope, helvetica;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  text-align: left;
  color: #000000;
  width: 100%;
  ${color};
  ${textAlign};
  ${space};
  ${zIndex};
  ${width};
`

/** @component */
export default Header
