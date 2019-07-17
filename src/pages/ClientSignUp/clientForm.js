import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { func, bool } from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { Field, reduxForm, reset } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import Loader from 'react-loader-spinner'
import { Container, Segment, Button, Form, Header, Icon, Dimmer } from 'semantic-ui-react'
import Text from 'simple-components/Text'
const countries = [
  { key: 'ke', text: 'Kenya', value: 'kenya' },
  { key: 'ne', text: 'Netherlands', value: 'netherlands' },
]

const LoaderSec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    min-height: 24rem;
`
const FormHeader = styled.div`
    text-align: center;
    background-color: red;
    font-size: 2em; 
    padding: 2rem;
    color: #ffff;
    margin-bottom: 2rem;
    padding: 3rem;
`

const FormDiv = styled(Flex)`
    align-self: center;
    flex-direction: column;
    z-index: 1001;
    background-color: #ffff;
    box-shadow: .1px .1px black;
`

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => {
  if (type === 'select') {
    return <Fragment>
      <Form.Select fluid {...input} options={countries} placeholder={label} />
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </Fragment>
  }

  return <Fragment>
    <Form.Input fluid {...input} placeholder={label} />
    {touched && error && <span style={{color: 'red'}}>{error}</span>}
  </Fragment>
}

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
  if (!values.companyName) {
    errors.companyName = 'Required'
  }
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.phoneNUmber) {
    errors.phoneNUmber = 'Required'
  }

  return errors
}


class ClientForm extends Component {
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
        this.setState({showLoader: false, formSuccess: true})
        dispatch(reset('clientForm'))
        resolve()
      }, 1000)
    })
  }

  renderLoader () {
    const { formSuccess } = this.state
    return (
      <Box p={[1, 1, 1]} >
        { formSuccess
          ? <h2 style={{color: '#fff'}}>Thanks for Signing Up, see you soon!</h2>
          : null
        }
      </Box>
    )
  }

  render () {
    const { handleSubmit, submitting } = this.props
    const { showLoader, formSuccess } = this.state

    // if (formSuccess) {
    //   return this.renderLoader()
    // }

    return (
      <FormDiv width={[1, 1, 2 / 3]} mt={[0, 0, '-7rem']} p={[0, 0, 2]}>
        <FormHeader>
          <h2>
            Share your contact details
            <Icon name='right arrow' />
          </h2>
        </FormHeader>
        <Box p={[2, 0, 0]}>
          <Dimmer.Dimmable as={Segment} dimmed={formSuccess}>
            <Form onSubmit={handleSubmit(this.submit)} loading={showLoader}>
              <Form.Group widths='equal'>
                <Field
                  name='firstName'
                  label='First Name'
                  component={renderField}
                  type='text'
                />
                <Field
                  name='lastName'
                  label='Last Name'
                  component={renderField}
                  type='text'
                />
              </Form.Group>
              <Field
                name='email'
                label='Email'
                component={renderField}
                type='text'
              />
              <Field
                name='phoneNUmber'
                label='Phone Number'
                component={renderField}
                type='text'
              />
              <Field
                name='companyName'
                label='Comapany Name'
                component={renderField}
                type='text'
              />


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
            </Form>
            <Dimmer active={formSuccess}>
              <Header as='h2' icon inverted>
                <Icon name='check' />
              Thanks for Signing Up, see you soon!
              </Header>
            </Dimmer>
          </Dimmer.Dimmable>
        </Box>
      </FormDiv>
    )
  }
}

ClientForm.propTypes = {
  handleSubmit: func,
  submitting: bool,
}

export default reduxForm({
  form: 'clientForm',
  destroyOnUnmount: true,
  validate,
})(ClientForm)
