import {Link, withRouter} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ReactHeaderContext from '../ReactHeaderContext'
import {
  BarRoutesContainer,
  LiRoute,
  RouteIcons,
  RouteText,
  Links,
  ContactHead,
  ContactIconsContainer,
  ContactPara,
  ContactUsContainer,
  LeftNavRoutesAndContactContainer,
  ContactImg,
} from '../../StyledComponents'

const routesList = [
  {
    id: 1,
    image: <AiFillHome />,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    image: <HiFire />,
    text: 'Trending',
    link: '/trending',
  },
  {
    id: 3,
    image: <SiYoutubegaming />,
    text: 'Gaming',
    link: '/gaming',
  },
  {
    id: 4,
    image: <BiListPlus />,
    text: 'Saved videos',
    link: '/saved-videos',
  },
]

const NavRoutes = props => {
  const {history} = props
  const {location} = history
  const {pathname} = location
  return (
    <ReactHeaderContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LeftNavRoutesAndContactContainer>
            <BarRoutesContainer darkTheme={darkTheme}>
              {routesList.map(route => {
                const isActive = pathname === route.link

                return (
                  <Links
                    as={Link}
                    key={route.id}
                    className="link"
                    to={route.link}
                  >
                    <LiRoute isActive={isActive} darkTheme={darkTheme}>
                      <RouteIcons isActive={isActive}>{route.image}</RouteIcons>
                      <RouteText isActive={isActive} darkTheme={darkTheme}>
                        {route.text}
                      </RouteText>
                    </LiRoute>
                  </Links>
                )
              })}
            </BarRoutesContainer>
            <ContactUsContainer>
              <ContactHead darkTheme={darkTheme}>CONTACT US</ContactHead>
              <ContactIconsContainer>
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  width="40px"
                />
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  width="40px"
                />
                <ContactImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  width="40px"
                />
              </ContactIconsContainer>
              <ContactPara as="p">
                Enjoy! Now to see your channels and recommendations!
              </ContactPara>
            </ContactUsContainer>
          </LeftNavRoutesAndContactContainer>
        )
      }}
    </ReactHeaderContext.Consumer>
  )
}
export default withRouter(NavRoutes)
