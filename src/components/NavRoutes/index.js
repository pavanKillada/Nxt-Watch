import {Link, withRouter} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'
import ReactHeaderContext from '../ReactHeaderContext'

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
          <ul
            className={
              darkTheme ? 'dark-bar-routes-container' : 'bar-routes-container'
            }
          >
            {routesList.map(route => {
              const isActive = pathname === route.link
              let className = 'li-route'
              if (isActive) {
                if (darkTheme) {
                  className = 'li-route dark-active-route'
                } else {
                  className = 'li-route active-route'
                }
              }
              return (
                <Link key={route.id} className="link" to={route.link}>
                  <li className={className}>
                    <p
                      className={
                        isActive ? 'active-route-icons' : 'route-icons'
                      }
                    >
                      {route.image}
                    </p>
                    <p className={darkTheme ? 'dark-route-text' : 'route-text'}>
                      {route.text}
                    </p>
                  </li>
                </Link>
              )
            })}
          </ul>
        )
      }}
    </ReactHeaderContext.Consumer>
  )
}
export default withRouter(NavRoutes)
