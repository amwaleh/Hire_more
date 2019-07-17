import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
// import theme from './index'

export default class ThemeWrapper extends Component {
  render () {
    return <ThemeProvider>{this.props.children}</ThemeProvider>
  }
}
