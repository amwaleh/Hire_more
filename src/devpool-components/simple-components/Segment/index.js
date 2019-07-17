import styled from 'styled-components'
import { space, width, color, height } from 'styled-system'

const Segment = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-image: url(${props => props.bgImage || ''});
    overflow-x: hidden;
    overflow-y: ${props => props.scroll || 'scroll'};;
    min-height: ${props => props.minheight || 'auto'};
    max-height: ${props => props.maxheight || 'none'};
    min-width: ${props => props.minwidth || 'auto'};
    max-width: ${props => props.minwidth || 'auto'};
    ${color};
    ${space};
    ${width};
    ${height};
`

export default Segment
