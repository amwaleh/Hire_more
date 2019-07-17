import styled from 'styled-components'
import { zIndex, width } from 'styled-system'

const HorizontalLine = styled.hr`
    line-height: 1px;
    opacity: 0.1;
    border: solid 0.8px #000000;
    ${width}
    ${zIndex}
`

HorizontalLine.defaultProps = {
  width: '100%',
}

export default HorizontalLine
