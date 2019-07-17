import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color, textAlign, fontWeight, fontStyle } from 'styled-system'

const Paragraph = styled.p`
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.03em;
    /*line-height: 1.1;*/
    overflow-wrap: break-word;

    ${textAlign};
    ${space};
    ${fontSize};
    ${color};
    ${fontWeight};
    ${fontStyle};
`

Paragraph.defaultProps = {
  fontSize: '14px',
  fontWeight: 'normal',
  color: '#A9A9A9',
  textAlign: 'left',
}

export default Paragraph
