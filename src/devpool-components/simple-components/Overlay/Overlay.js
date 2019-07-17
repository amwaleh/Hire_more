import { string, node } from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const Overlay = styled.div`
${(props) =>
    props.positon &&
    css`
      position: ${props.positon};
      top: ${props.top};
      left: ${props.left};
      right: ${props.right};
      bottom: ${props.bottom};
    `}
position: relative;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
z-index: 5000;

${(props) =>
    props.node &&
    css`
        background: ${node};
`}

background-color: rgba(0, 0, 0, 0.6);
${(props) =>
    props.color &&
    css`
        background-color: ${rgba(props.color, 0.15)};
    `}

`

Overlay.propTypes = {
  color: string,
  node: node,
}

export default Overlay
