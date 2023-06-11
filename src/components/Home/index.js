import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {CgClose} from 'react-icons/cg'
import {HiSearch} from 'react-icons/hi'
import ReactHeaderContext from '../ReactHeaderContext'
import Header from '../Header'
import VideoItem from '../VideoItem'
import NavRoutes from '../NavRoutes'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  VideosUl,
  LoaderContainer,
  HomeFailureContainer,
  FailureHead,
  FailurePara,
  RetryBtn,
  HomeBgContainer,
  HomeBodyContent,
  LeftNavContainer,
  BannerAndVideoContainer,
  BannerContainer,
  BannerHeader,
  BannerLogo,
  CrossBtn,
  BannerText,
  BannerBtn,
  VideosBgContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
} from '../../StyledComponents'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    videos: [],
    fetching: fetchStatus.inProgress,
    activeBanner: true,
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

  renderVideosListView = darkTheme => {
    const {videos} = this.state
    return (
      <VideosUl>
        {videos.map(video => (
          <VideoItem
            darkTheme={darkTheme}
            key={video.id}
            videoDetails={video}
          />
        ))}
      </VideosUl>
    )
  }

  onCancelBanner = () => {
    this.setState({activeBanner: false})
  }

  render() {
    const {activeBanner} = this.state
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
                alt="Error"
                width="50%"
              />
              <FailureHead darkTheme={darkTheme}>
                Oops! Something Went Wrong
              </FailureHead>
              <FailurePara>
                We are having some trouble to complete your request.
                <br />
                Please try again.
              </FailurePara>
              <RetryBtn type="button">Retry</RetryBtn>
            </HomeFailureContainer>
          )

          const renderHomeView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderVideosListView(darkTheme)
            }
          }

          return (
            <HomeBgContainer darkTheme={darkTheme}>
              <Header />
              <HomeBodyContent>
                <LeftNavContainer>
                  <NavRoutes />
                </LeftNavContainer>
                <BannerAndVideoContainer>
                  {activeBanner && (
                    <BannerContainer>
                      <BannerHeader>
                        <BannerLogo
                          className="banner-logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                          width="120px"
                        />
                        <CrossBtn onClick={this.onCancelBanner} type="button">
                          <CgClose />
                        </CrossBtn>
                      </BannerHeader>
                      <BannerText>
                        Buy Nxt Watch Premium Prepaid plans with UPI
                      </BannerText>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </BannerContainer>
                  )}
                  <VideosBgContainer darkTheme={darkTheme}>
                    <SearchContainer darkTheme={darkTheme}>
                      <SearchInput
                        darkTheme={darkTheme}
                        type="search"
                        placeholder="Search"
                      />
                      <SearchBtn type="button">
                        <HiSearch />
                      </SearchBtn>
                    </SearchContainer>
                    {renderHomeView()}
                  </VideosBgContainer>
                </BannerAndVideoContainer>
              </HomeBodyContent>
            </HomeBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}
export default Home
