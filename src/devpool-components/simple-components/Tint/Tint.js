import styled from 'styled-components'


const Tint = styled.div`
  padding-right: 10px;
  background: -webkit-linear-gradient(
    -31deg,
    rgba(255, 255, 255, 1) ${props => props.rotation || '50%'},
    rgba(85, 125, 70, 0.9) ${props => props.rotation || '50%'}
  );
`

export default Tint
