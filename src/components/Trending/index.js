import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import OtherRoutesVideoItem from '../OtherRoutesVideoItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  TrendingBgContainer,
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
  OtherVideosUl,
} from '../../StyledComponents'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {
    fetching: fetchStatus.inProgress,
    trendingVideos: [],
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
        'https://apis.ccbp.in/videos/trending',
        options,
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({
          trendingVideos: data.videos,
          fetching: fetchStatus.success,
        })
      } else {
        this.setState({fetching: fetchStatus.failed})
      }
    } catch (error) {
      this.setState({fetching: fetchStatus.failed})
    }
  }

  renderTrendingVideos = darkTheme => {
    const {trendingVideos} = this.state
    return (
      <>
        <TrendingHeader data-testid="banner" darkTheme={darkTheme}>
          <IconContainer darkTheme={darkTheme}>
            <HiFire />
          </IconContainer>
          <TrendingHeaderText as="h1" darkTheme={darkTheme}>
            Trending
          </TrendingHeaderText>
        </TrendingHeader>
        <VideosBgContainer darkTheme={darkTheme}>
          <OtherVideosUl>
            {trendingVideos.map(item => (
              <OtherRoutesVideoItem
                darkTheme={darkTheme}
                key={item.id}
                videoDetails={item}
              />
            ))}
          </OtherVideosUl>
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

          const renderTrendingView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderTrendingVideos(darkTheme)
            }
          }

          return (
            <TrendingBgContainer data-testid="trending" darkTheme={darkTheme}>
              <Header />
              <HomeBodyContent darkTheme={darkTheme}>
                <LeftNavContainer darkTheme={darkTheme}>
                  <NavRoutes />
                </LeftNavContainer>
                <OtherVideosContainer darkTheme={darkTheme}>
                  {renderTrendingView()}
                </OtherVideosContainer>
              </HomeBodyContent>
            </TrendingBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default Trending
