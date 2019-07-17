import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Grid} from 'semantic-ui-react'
const LogoStrip = styled(Grid)`
  margin: 50px 0 !important;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  padding: 50px 0 30px 0;
  max-width: 80vw;
  flex-flow: wrap;
  & > img {
    max-height: 100px;
    padding: 5px;
    bacground-color: transparent;
    filter: brightness(0) invert(1);
  }
`
const PartnerStrip = ({ logos }) => (
  <LogoStrip>
    {logos.map((logo, i) => (
      <img key={`key-${i}`} src={logo} />
    ))}
  </LogoStrip>
)

PartnerStrip.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default PartnerStrip
