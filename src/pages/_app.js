import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import appStore from 'reduxPath'
import SidebarMenu from 'components/Sidebar'

const withReduxOptions = {
  debug: false,
}

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' })

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <SidebarMenu>
            <Component {...pageProps} />
          </SidebarMenu>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(appStore, withReduxOptions)(MyApp)
