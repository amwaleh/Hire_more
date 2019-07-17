import React from 'react'
import { string } from 'prop-types'

import Icon from './Icon'

const MobileMenu = ({ color, width, height, ...props }) => (
  <Icon width={width} height={height} viewBox='0 0 9 6' {...props}>
    <g fill='none' stroke={color} strokeWidth='.9' >
      <path fill={color} d='M2,2 L8,2' />
      <path fill={color} d='M4,4 L8,4' />
    </g>
  </Icon>
)

MobileMenu.propTypes = {
  color: string,
  width: string,
  height: string,
}

MobileMenu.defaultProps = {
  color: '#000',
}

export default MobileMenu
