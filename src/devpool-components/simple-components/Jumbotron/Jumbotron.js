import styled, { css } from 'styled-components'
import { color, minHeight, space } from 'styled-system'

const Jumbotron = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: ${props => props.minHeight ? 0 : '30vw'};

  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `};

  ${color};
  ${minHeight};
  ${space};
`

Jumbotron.defaultProps = {
  backgroundColor: '#fff',
}

/** @component */
export default Jumbotron
