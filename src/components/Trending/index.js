import './index.css'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'

const Trending = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div
          className={
            darkTheme ? 'dark-trending-bg-container' : 'trending-bg-container'
          }
        >
          <Header />
        </div>
      )
    }}
  </ReactHeaderContext.Consumer>
)

export default Trending
