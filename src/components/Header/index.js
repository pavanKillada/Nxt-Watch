import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon, FaBars} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import {
  BarRoutesDivContainer,
  Nav,
  NavIconsContainer,
  NavIconsLi,
  NavProfileIconLi,
  ProfileBtn,
  NavBarsIconLi,
  ThemeBtn,
  NavLogoutIconLi,
  PopupContainer,
  PopupText,
  PopupBtnsContainer,
  CancelBtn,
  ConformBtn,
  NavLogoutBtnLi,
  LogoutBtn,
} from '../../StyledComponents'

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
              <Nav darkTheme={darkTheme}>
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
                <NavIconsContainer darkTheme={darkTheme}>
                  <NavIconsLi darkTheme={darkTheme}>
                    {darkTheme ? (
                      <ThemeBtn
                        darkTheme={darkTheme}
                        onClick={onChangeTheme}
                        type="button"
                      >
                        <BiSun />
                      </ThemeBtn>
                    ) : (
                      <ThemeBtn
                        darkTheme={darkTheme}
                        onClick={onChangeTheme}
                        type="button"
                      >
                        <FaMoon />
                      </ThemeBtn>
                    )}
                  </NavIconsLi>
                  <NavProfileIconLi darkTheme={darkTheme}>
                    <ProfileBtn darkTheme={darkTheme} type="button">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                        width="25px"
                      />
                    </ProfileBtn>
                  </NavProfileIconLi>
                  <NavBarsIconLi darkTheme={darkTheme}>
                    <ThemeBtn
                      darkTheme={darkTheme}
                      type="button"
                      onClick={this.onClickBar}
                    >
                      <FaBars />
                    </ThemeBtn>
                  </NavBarsIconLi>
                  <NavLogoutIconLi darkTheme={darkTheme}>
                    <Popup
                      modal
                      trigger={
                        <ThemeBtn darkTheme={darkTheme} type="button">
                          <FiLogOut />
                        </ThemeBtn>
                      }
                    >
                      {close => (
                        <PopupContainer darkTheme={darkTheme}>
                          <PopupText darkTheme={darkTheme}>
                            Are you sure, you want to logout?
                          </PopupText>
                          <PopupBtnsContainer darkTheme={darkTheme}>
                            <CancelBtn
                              darkTheme={darkTheme}
                              onClick={() => close()}
                              type="button"
                            >
                              Cancel
                            </CancelBtn>
                            <ConformBtn
                              darkTheme={darkTheme}
                              onClick={this.onLogout}
                              type="button"
                            >
                              Conform
                            </ConformBtn>
                          </PopupBtnsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </NavLogoutIconLi>
                  <NavLogoutBtnLi darkTheme={darkTheme}>
                    <Popup
                      position="center center"
                      modal
                      trigger={
                        <LogoutBtn darkTheme={darkTheme} type="button">
                          Logout
                        </LogoutBtn>
                      }
                    >
                      {close => (
                        <PopupContainer darkTheme={darkTheme}>
                          <PopupText darkTheme={darkTheme}>
                            Are you sure, you want to logout?
                          </PopupText>
                          <PopupBtnsContainer darkTheme={darkTheme}>
                            <CancelBtn
                              darkTheme={darkTheme}
                              onClick={() => close()}
                              type="button"
                            >
                              Cancel
                            </CancelBtn>
                            <ConformBtn
                              darkTheme={darkTheme}
                              onClick={this.onLogout}
                              type="button"
                            >
                              Conform
                            </ConformBtn>
                          </PopupBtnsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </NavLogoutBtnLi>
                </NavIconsContainer>
              </Nav>
              <BarRoutesDivContainer darkTheme={darkTheme}>
                {barActive && <NavRoutes />}
              </BarRoutesDivContainer>
            </>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default withRouter(Header)
