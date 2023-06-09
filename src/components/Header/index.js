import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon, FaBars} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import './index.css'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'

class Header extends Component {
  state = {
    barActive: false,
  }

  onClickBar = () => {
    this.setState(prev => ({barActive: !prev.barActive}))
  }

  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {barActive} = this.state

    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme, onChangeTheme} = value
          return (
            <>
              <nav className={darkTheme ? 'dark-nav' : 'nav'}>
                <Link className="link" to="/">
                  <img
                    src={
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                    width="120px"
                  />
                </Link>
                <ul className="nav-icons-container">
                  <li className="nav-icon-li">
                    {darkTheme ? (
                      <button
                        className={darkTheme ? 'dark-theme-btn' : 'theme-btn'}
                        onClick={onChangeTheme}
                        type="button"
                      >
                        <BiSun />
                      </button>
                    ) : (
                      <button
                        className={darkTheme ? 'dark-theme-btn' : 'theme-btn'}
                        onClick={onChangeTheme}
                        type="button"
                      >
                        <FaMoon />
                      </button>
                    )}
                  </li>
                  <li className="nav-profile-icon-li">
                    <button className="profile-btn" type="button">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                        width="25px"
                      />
                    </button>
                  </li>
                  <li className="nav-bars-icon-li">
                    <button
                      className={darkTheme ? 'dark-theme-btn' : 'theme-btn'}
                      type="button"
                      onClick={this.onClickBar}
                    >
                      <FaBars className={barActive && 'active-bar'} />
                    </button>
                  </li>
                  <li className="nav-logout-icon-li">
                    <Popup
                      modal
                      trigger={
                        <button
                          className={darkTheme ? 'dark-theme-btn' : 'theme-btn'}
                          type="button"
                        >
                          <FiLogOut />
                        </button>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <div className={darkTheme ? 'dark-popup' : 'popup'}>
                          <p
                            className={
                              darkTheme ? 'dark-popup-text' : 'popup-text'
                            }
                          >
                            Are you sure, you want to logout?
                          </p>
                          <div className="popup-btns-container">
                            <button
                              className={
                                darkTheme ? 'dark-cancel-btn' : 'cancel-btn'
                              }
                              onClick={() => close()}
                              type="button"
                            >
                              Cancel
                            </button>
                            <button
                              className="conform-btn"
                              onClick={this.onLogout}
                              type="button"
                            >
                              Conform
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </li>
                  <li className="nav-logout-btn-li">
                    <Popup
                      modal
                      trigger={
                        <button
                          className={
                            darkTheme ? 'dark-logout-btn' : 'logout-btn'
                          }
                          type="button"
                        >
                          Logout
                        </button>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <div className={darkTheme ? 'dark-popup' : 'popup'}>
                          <p
                            className={
                              darkTheme ? 'dark-popup-text' : 'popup-text'
                            }
                          >
                            Are you sure, you want to logout?
                          </p>
                          <div className="popup-btns-container">
                            <button
                              className={
                                darkTheme ? 'dark-cancel-btn' : 'cancel-btn'
                              }
                              onClick={() => close()}
                              type="button"
                            >
                              Cancel
                            </button>
                            <button
                              className="conform-btn"
                              onClick={this.onLogout}
                              type="button"
                            >
                              Conform
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </li>
                </ul>
              </nav>
              <div className="bar-routes-div-container">
                {barActive && <NavRoutes />}
              </div>
            </>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default withRouter(Header)
