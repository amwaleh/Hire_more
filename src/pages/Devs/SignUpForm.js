import React, { Component } from 'react'
import styled from 'styled-components'
import { func, bool } from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { Field, reduxForm, reset } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import Loader from 'react-loader-spinner'
// import { Loader, Segment } from 'semantic-ui-react'
import Button from 'simple-components/Button'
import Text from 'simple-components/Text'

const Sec = styled(Flex)`
    justify-content: center;
    background: linear-gradient(to left, rgba(85, 125, 70, 0), #039BE5);
    width: 100%;
    min-height: 8rem;
`

const LoaderSec = Sec.extend`
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, rgba(85, 125, 70, 0), #039BE5);
    width: 100%;
    min-height: 21.8rem;
`

const Sec1 = styled(Flex)`
    min-height: 8rem;
    flex-direction: column;
    overflow: hidden;
`

const inputField = {
  border: '0px',
  width: '100%',
  padding: '12px 16px',
  margin: '4px 0',
}

const inputField1 = {
  border: '0px',
  width: '100%',
  padding: '12px 16px',
  margin: '4px 0',
}

const H2 = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 3rem;
`
const P = styled.p`
    color: #fff;
    text-align: center;
`

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} style={inputField} placeholder={label} />
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </div>
  </div>
)

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email'
  }
  if (!values.linkToRepo) {
    errors.linkToRepo = 'Required'
  }

  return errors
}


class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  state = {
    formSuccess: false,
    showLoader: false,
  }

  submit (values, dispatch) {
    this.setState({showLoader: true})

    // simulate server latency
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('values', values)
        this.setState({showLoader: true, formSuccess: true})
        dispatch(reset('devSignupForm'))
        resolve()
      }, 1000)
    })
  }

  renderLoader () {
    const { formSuccess, showLoader } = this.state
    return (
      <LoaderSec p={[1, 1, 1]} >
        { showLoader && !formSuccess
          ? <Loader
            type='Circles'
            color='#fff'
            height='100'
            width='100'
          />
          : <h2 style={{color: '#fff'}}>Thanks for Signing Up, see you soon!</h2>
        }
      </LoaderSec>
    )
  }

  render () {
    const { handleSubmit, submitting } = this.props
    const { showLoader } = this.state

    if (showLoader) {
      return this.renderLoader()
    }

    return (
      <Sec p={[1, 1, 1]}>
        <Sec1 width={[1, 1, 1 / 2]}>
          <form onSubmit={handleSubmit(this.submit)}>
            <Box alignSelf='center'>
              <H2>Let’s make movements</H2>
              <P color='#fff' align='center'>Want to join the Spark movement? </P>
            </Box>
            <Flex flexDirection={['column', 'column', 'row']} justifyContent='space-between'>
              <Box width={[1, 1, 0.3]}>
                <Field
                  name='firstName'
                  label='First Name'
                  component={renderField}
                  type='text'
                />
              </Box>
              <Box width={[1, 1, 0.6]}>
                <Field
                  name='lastName'
                  placeholder='Last Name'
                  component={renderField}
                  type='text'
                  style={inputField}
                />
              </Box>
            </Flex>
            <Box >
              <Field
                name='email'
                label='Email'
                component={renderField}
                type='text'
                style={inputField1}
              />
            </Box>
            <Box >
              <Field
                name='linkToRepo'
                label='Link to public repo'
                component={renderField}
                type='text'
                style={inputField1}
              />
            </Box>
            <Flex flexDirection={['column', 'column', 'row']} justifyContent='space-between' alignItems={['flex-end', 'flex-end', 'center']}>
              <Box>
                <Text>* All fields are required for a valid application</Text>
              </Box>
              <Box>
                <Button bg='#cd0f19' p={15} type='submit' disabled={submitting}>
                    Sign Up
                </Button>
              </Box>
            </Flex>
          </form>
        </Sec1>
      </Sec>
    )
  }
}

SignUpForm.propTypes = {
  handleSubmit: func,
  submitting: bool,
}

export default reduxForm({
  form: 'devSignupForm',
  destroyOnUnmount: true,
  validate,
})(SignUpForm)
