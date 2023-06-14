import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import GamingVideoItem from '../GamingVideoItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  HomeBodyContent,
  LeftNavContainer,
  OtherVideosContainer,
  VideosBgContainer,
  TrendingHeader,
  IconContainer,
  TrendingHeaderText,
  LoaderContainer,
  HomeFailureContainer,
  FailureHead,
  FailurePara,
  RetryBtn,
  GamingVideosUl,
  TrendingBgContainer,
} from '../../StyledComponents'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    fetching: fetchStatus.inProgress,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({fetching: fetchStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(
        'https://apis.ccbp.in/videos/gaming',
        options,
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({
          gamingVideos: data.videos,
          fetching: fetchStatus.success,
        })
      } else {
        this.setState({fetching: fetchStatus.failed})
      }
    } catch (error) {
      this.setState({fetching: fetchStatus.failed})
    }
  }

  renderGamingVideos = darkTheme => {
    const {gamingVideos} = this.state
    return (
      <>
        <TrendingHeader data-testid="banner" darkTheme={darkTheme}>
          <IconContainer darkTheme={darkTheme}>
            <SiYoutubegaming />
          </IconContainer>
          <TrendingHeaderText darkTheme={darkTheme}>Gaming</TrendingHeaderText>
        </TrendingHeader>
        <VideosBgContainer darkTheme={darkTheme}>
          <GamingVideosUl>
            {gamingVideos.map(item => (
              <GamingVideoItem
                darkTheme={darkTheme}
                key={item.id}
                videoDetails={item}
              />
            ))}
          </GamingVideosUl>
        </VideosBgContainer>
      </>
    )
  }

  onRetry = () => {
    this.componentDidMount()
  }

  render() {
    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme} = value

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                width={50}
                height={50}
                color={darkTheme ? '#ffffff' : '#00306e'}
              />
            </LoaderContainer>
          )

          const renderFailureView = () => (
            <HomeFailureContainer>
              <img
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
                width="50%"
              />
              <FailureHead darkTheme={darkTheme}>
                Oops! Something Went Wrong
              </FailureHead>
              <FailurePara>
                We are having some trouble to complete your request. Please try
                again.
              </FailurePara>
              <RetryBtn onClick={this.onRetry} type="button">
                Retry
              </RetryBtn>
            </HomeFailureContainer>
          )

          const renderGamingView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderGamingVideos(darkTheme)
            }
          }

          return (
            <TrendingBgContainer data-testid="gaming" darkTheme={darkTheme}>
              <Header />
              <HomeBodyContent darkTheme={darkTheme}>
                <LeftNavContainer darkTheme={darkTheme}>
                  <NavRoutes />
                </LeftNavContainer>
                <OtherVideosContainer darkTheme={darkTheme}>
                  {renderGamingView()}
                </OtherVideosContainer>
              </HomeBodyContent>
            </TrendingBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default Gaming
