import React from 'react'
import { func, node, object, string } from 'prop-types'
import * as cookie from 'js-cookie'
import Head from 'next/head'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { pageview } from 'reduxPath/modules/ui/actions'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Banner from 'simple-components/Banner'
import Text from 'simple-components/Text'
import Button from 'simple-components/Button'

const container = {
  flex: 1,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  overFlow: 'none',
  margin: 0,
  padding: 0,
  border: 0,
}

const CookieClose = styled.button`
  background: 0;
  border: 0;
  color: #fff;
`

class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isCookieBannerVisible: false,
    }
  }

  static defaultProps = {
    title: 'Spark developers',
  }
  componentWillMount () {}

  componentDidMount () {
    const { router } = this.props

    this.props.pageview(router)

    if (!cookie.get('SparkCODING_COOKIES')) {
      this.setState({ isCookieBannerVisible: true })
    }
  }

  handleCookie = () => {
    cookie.set('SparkCODING_COOKIES', 'allow', { expires: 365, path: '/' })
    this.setState({ isCookieBannerVisible: false })
  }

  render () {
    const { title, children } = this.props
    const { isCookieBannerVisible } = this.state

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link rel='stylesheet' href='../static/styles/styles.css' />
          <link rel='stylesheet' href='../static/styles/carousel.min.css' />
          <link rel='stylesheet' href='../static/styles/timeline.min.css' />
        </Head>
        <div style={container}>
          <Header />
          {children}
          <Footer />
          <Banner p={[1, 2, 4]} shouldShow={isCookieBannerVisible}>
            <Flex
              flex={5}
              flexDirection={['column', 'column', 'row']}
              alignItems={['flex-start', 'flex-start', 'center']}
              justifyContent={'space-between'}
            >
              <Box flex={[1, 1, 3]}>
                <Text size='18px'>
                  Spark developers uses both its own and third-party cookies for technical, analytical, and marketing purposes.
                  By using our site, you agree to our use of cookies. Read our <a href='/'>cookie statement</a>.
                </Text>
              </Box>
              <Box flex={[1, 1, 1]} ml={[0, 0, 2]} mt={[1, 1, 0]}>
                <Button small onClick={this.handleCookie}>
                  Accept All Cookies
                </Button>
              </Box>
              <Box
                flex={1 / 2}
                alignSelf={['flex-start', 'flex-start', 'center']}
              >
                <CookieClose onClick={this.handleCookie}>X</CookieClose>
              </Box>
            </Flex>
          </Banner>
        </div>
      </div>
    )
  }
}
AppContainer.propTypes = {
  title: string,
  children: node,
  router: object,
  pageview: func,
}

const mapStateToProps = state => ({
  isBurgerMenuOpen: false,
})

const mapDispatchToProps = { pageview }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppContainer))
