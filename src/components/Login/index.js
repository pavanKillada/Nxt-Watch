import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactHeaderContext from '../ReactHeaderContext'
import {
  Form,
  LoginBgContainer,
  FormContainer,
  LogoContainer,
  LoginWebsiteLogo,
  Label,
  UserInput,
  CheckboxContainer,
  LoginBtn,
  ErrorMsg,
} from '../../StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checkbox: false,
    fetchError: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({fetchError: data.error_msg})
    }
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prev => ({checkbox: !prev.checkbox}))
  }

  render() {
    const {username, password, checkbox, fetchError} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LoginBgContainer darkTheme={darkTheme}>
              <FormContainer darkTheme={darkTheme}>
                <Form darkTheme={darkTheme} onSubmit={this.onSubmitForm}>
                  <LogoContainer>
                    <LoginWebsiteLogo
                      src={
                        darkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </LogoContainer>
                  <Label darkTheme={darkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <UserInput
                    value={username}
                    id="username"
                    type="text"
                    onChange={this.onUsername}
                  />
                  <Label darkTheme={darkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <UserInput
                    value={password}
                    id="password"
                    type={checkbox ? 'text' : 'password'}
                    onChange={this.onPassword}
                  />
                  <CheckboxContainer>
                    <input
                      onClick={this.togglePassword}
                      type="checkbox"
                      id="show password"
                    />
                    <Label darkTheme={darkTheme} htmlFor="show password">
                      Show Password
                    </Label>
                  </CheckboxContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {fetchError !== '' && <ErrorMsg>{fetchError}</ErrorMsg>}
                </Form>
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}
export default Login
