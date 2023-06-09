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
              <Nav>
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
                <NavIconsContainer>
                  <NavIconsLi>
                    {darkTheme ? (
                      <ThemeBtn onClick={onChangeTheme} type="button">
                        <BiSun />
                      </ThemeBtn>
                    ) : (
                      <ThemeBtn onClick={onChangeTheme} type="button">
                        <FaMoon />
                      </ThemeBtn>
                    )}
                  </NavIconsLi>
                  <NavProfileIconLi>
                    <ProfileBtn type="button">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                        width="25px"
                      />
                    </ProfileBtn>
                  </NavProfileIconLi>
                  <NavBarsIconLi>
                    <ThemeBtn type="button" onClick={this.onClickBar}>
                      <FaBars />
                    </ThemeBtn>
                  </NavBarsIconLi>
                  <NavLogoutIconLi>
                    <Popup
                      position="center center"
                      modal
                      trigger={
                        <ThemeBtn type="button">
                          <FiLogOut />
                        </ThemeBtn>
                      }
                    >
                      {close => (
                        <PopupContainer>
                          <PopupText>
                            Are you sure, you want to logout?
                          </PopupText>
                          <PopupBtnsContainer>
                            <CancelBtn onClick={() => close()} type="button">
                              Cancel
                            </CancelBtn>
                            <ConformBtn onClick={this.onLogout} type="button">
                              Conform
                            </ConformBtn>
                          </PopupBtnsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </NavLogoutIconLi>
                  <NavLogoutBtnLi>
                    <Popup
                      position="center center"
                      modal
                      trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                    >
                      {close => (
                        <PopupContainer>
                          <PopupText>
                            Are you sure, you want to logout?
                          </PopupText>
                          <PopupBtnsContainer>
                            <CancelBtn onClick={() => close()} type="button">
                              Cancel
                            </CancelBtn>
                            <ConformBtn onClick={this.onLogout} type="button">
                              Conform
                            </ConformBtn>
                          </PopupBtnsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </NavLogoutBtnLi>
                </NavIconsContainer>
              </Nav>
              <BarRoutesDivContainer>
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
