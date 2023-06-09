import {Component} from 'react'
import ReactHeaderContext from '../ReactHeaderContext'
import Header from '../Header'
import NavRoutes from '../NavRoutes'
import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <div
              className={
                darkTheme ? 'dark-home-bg-container' : 'home-bg-container'
              }
            >
              <Header />
              <div className="home-body-content">
                <div className="left-nav-container">
                  <NavRoutes />
                </div>
              </div>
            </div>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}
export default Home
