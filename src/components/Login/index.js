import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactHeaderContext from '../ReactHeaderContext'
import './index.css'

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
            <div
              className={
                darkTheme ? 'dark-login-bg-container' : 'login-bg-container'
              }
            >
              <div
                className={darkTheme ? 'dark-form-container' : 'form-container'}
              >
                <form
                  className={darkTheme ? 'dark-form' : undefined}
                  onSubmit={this.onSubmitForm}
                >
                  <div className="logo-container">
                    <img
                      src={
                        darkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                      className="website-logo"
                    />
                  </div>
                  <label
                    className={darkTheme ? 'dark-label' : undefined}
                    htmlFor="username"
                  >
                    USERNAME
                  </label>
                  <input
                    value={username}
                    className="user-input"
                    id="username"
                    type="text"
                    onChange={this.onUsername}
                  />
                  <label
                    className={darkTheme ? 'dark-label' : undefined}
                    htmlFor="password"
                  >
                    PASSWORD
                  </label>
                  <input
                    value={password}
                    className="user-input"
                    id="password"
                    type={checkbox ? 'text' : 'password'}
                    onChange={this.onPassword}
                  />
                  <div className="checkbox-container">
                    <input
                      onClick={this.togglePassword}
                      type="checkbox"
                      id="show password"
                    />
                    <label
                      className={darkTheme ? 'dark-label' : undefined}
                      htmlFor="show password"
                    >
                      Show Password
                    </label>
                  </div>
                  <button className="login-btn" type="submit">
                    Login
                  </button>
                  {fetchError !== '' && (
                    <p className="error-msg">{fetchError}</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}
export default Login
