import './index.css'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'

const SavedVideos = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div
          className={
            darkTheme
              ? 'dark-saved-videos-bg-container'
              : 'saved-videos-bg-container'
          }
        >
          <Header />
        </div>
      )
    }}
  </ReactHeaderContext.Consumer>
)

export default SavedVideos
