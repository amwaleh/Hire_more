import React, { Component } from 'react'
import { connect } from 'react-redux'
import theme from 'devpool-components/Theme'
import { ThemeProvider } from 'styled-components'
import AppContainer from 'containers/AppContainer'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

const wrappedComponent = (mapStateToProps = null, mapDispatchToProps = null, mergeProps = null) => (Child) => {
  class BasePage extends Component {
    static async getInitialProps (context) {
      try {
        // const { req, store } = context
        // const mobileDetect = mobileParser(req)

        // store.dispatch(setMobileDetect(mobileDetect))

        if (Child.getInitialProps) {
          return Child.getInitialProps(context)
        }
      } catch (error) {
        throw error
      }
    }

    render () {
      return (
        <ThemeProvider theme={theme}>
          <AppContainer>
            <Child {...this.props} />
          </AppContainer>
        </ThemeProvider>
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(BasePage)
}
export default wrappedComponent
