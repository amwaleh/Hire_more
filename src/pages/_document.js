import React, { Component } from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import 'semantic-ui-css/semantic.min.css'
export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css'
          />
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='../../static/images/logos/favicon.png'
          />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
