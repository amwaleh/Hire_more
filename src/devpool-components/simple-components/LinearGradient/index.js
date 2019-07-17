import styled from 'styled-components'
import { space } from 'styled-system'


const colorGenerator = colors =>
  colors
    .map((color) => `${color.color} ${color.spread}`)
    .join(',')

const LinearGradient = styled.div`
  background: linear-gradient(
    ${props => `${props.rotate}deg` || '-31deg'},
    ${props => props.tint && colorGenerator(props.tint)}
  );
  ${space};
`


export default LinearGradient
