import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {CgClose} from 'react-icons/cg'
import {HiSearch} from 'react-icons/hi'
import ReactHeaderContext from '../ReactHeaderContext'
import Header from '../Header'
import VideoItem from '../VideoItem'
import NavRoutes from '../NavRoutes'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    videos: [],
    fetching: fetchStatus.inProgress,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({fetching: fetchStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({videos: data.videos, fetching: fetchStatus.success})
      } else {
        this.setState({fetching: fetchStatus.failed})
      }
    } catch (error) {
      this.setState({fetching: fetchStatus.failed})
    }
  }

  renderVideosListView = () => {
    const {videos} = this.state
    return (
      <ul className="videos-ul">
        {videos.map(video => (
          <VideoItem key={video.id} videoDetails={video} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme} = value

          const renderLoader = () => (
            <div data-testid="loader" className="loader">
              <Loader
                type="ThreeDots"
                width={50}
                height={50}
                color={darkTheme ? '#ffffff' : '#00306e'}
              />
            </div>
          )

          const renderFailureView = () => (
            <div className="home-failure-container">
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="Error"
                width="50%"
              />
              <h1 className={darkTheme ? 'dark-failure-head' : 'failure-head'}>
                Oops! Something Went Wrong
              </h1>
              <p className="failure-para">
                We are having some trouble to complete your request.
                <br />
                Please try again.
              </p>
              <button className="retry-btn" type="button">
                Retry
              </button>
            </div>
          )

          const renderHomeView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderVideosListView()
            }
          }

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
                <div className="banner-and-videos-container">
                  <div className="banner-container">
                    <div className="banner-header">
                      <img
                        className="banner-logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                        width="120px"
                      />
                      <button className="cross-btn" type="button">
                        <CgClose />
                      </button>
                    </div>
                    <p className="banner-text">
                      Buy Nxt Watch Premium Prepaid plans with UPI
                    </p>
                    <button className="get-it-now-btn" type="button">
                      GET IT NOW
                    </button>
                  </div>
                  <div
                    className={
                      darkTheme
                        ? 'dark-videos-bg-container'
                        : 'videos-bg-container'
                    }
                  >
                    <div className="search-container">
                      <input
                        type="search"
                        className="search-input"
                        placeholder="Search"
                      />
                      <button className="search-btn" type="button">
                        <HiSearch />
                      </button>
                    </div>
                    {renderHomeView()}
                  </div>
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
