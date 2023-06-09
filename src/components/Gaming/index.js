import './index.css'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'

const Gaming = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div
          className={
            darkTheme ? 'dark-gaming-bg-container' : 'gaming-bg-container'
          }
        >
          <Header />
        </div>
      )
    }}
  </ReactHeaderContext.Consumer>
)

export default Gaming
