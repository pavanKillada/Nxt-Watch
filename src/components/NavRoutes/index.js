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
                    <RouteText darkTheme={darkTheme}>{route.text}</RouteText>
                  </LiRoute>
                </Links>
              )
            })}
          </BarRoutesContainer>
        )
      }}
    </ReactHeaderContext.Consumer>
  )
}
export default withRouter(NavRoutes)
