import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  HomeBgContainer,
  HomeBodyContent,
  LeftNavContainer,
  OtherVideosContainer,
  LoaderContainer,
  HomeFailureContainer,
  FailureHead,
  FailurePara,
  RetryBtn,
  PlayerComponent,
  PlayerContainer,
  VideoTitle,
  VideoDetailsContent,
  ThumbnailViewsAndTime,
  ThumbnailPara,
  VideoDetailsBtns,
} from '../../StyledComponents'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    fetching: fetchStatus.inProgress,
    VideoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({fetching: fetchStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videoDetails: data.video_details,
          fetching: fetchStatus.success,
        })
      } else {
        this.setState({fetching: fetchStatus.failed})
      }
    } catch (error) {
      this.setState({fetching: fetchStatus.failed})
    }
  }

  renderVideoDetails = darkTheme => {
    const {videoDetails} = this.state
    const time = formatDistanceToNow(new Date(videoDetails.published_at)).split(
      ' ',
    )
    const duration = time.slice(1, 3).join(' ')
    return (
      <PlayerContainer>
        <PlayerComponent width="100%" url={videoDetails.video_url} />
        <VideoDetailsContent>
          <VideoTitle darkTheme={darkTheme}>{videoDetails.title}</VideoTitle>
          <ThumbnailViewsAndTime>
            <ThumbnailPara>{videoDetails.view_count} views</ThumbnailPara>
            <ThumbnailPara>{duration} ago</ThumbnailPara>
          </ThumbnailViewsAndTime>
          <ThumbnailViewsAndTime>
            <VideoDetailsBtns>
              <BiLike /> Like
            </VideoDetailsBtns>
            <VideoDetailsBtns>
              <BiDislike /> Dislike
            </VideoDetailsBtns>
            <VideoDetailsBtns>
              <BiListPlus /> Save
            </VideoDetailsBtns>
          </ThumbnailViewsAndTime>
        </VideoDetailsContent>
      </PlayerContainer>
    )
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
              <RetryBtn
                onClick={() => {
                  this.getVideoDetails()
                }}
                type="button"
              >
                Retry
              </RetryBtn>
            </HomeFailureContainer>
          )

          const renderVideoDetailsView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderVideoDetails(darkTheme)
            }
          }

          return (
            <HomeBgContainer darkTheme={darkTheme}>
              <Header />
              <HomeBodyContent darkTheme={darkTheme}>
                <LeftNavContainer darkTheme={darkTheme}>
                  <NavRoutes />
                </LeftNavContainer>
                <OtherVideosContainer darkTheme={darkTheme}>
                  {renderVideoDetailsView()}
                </OtherVideosContainer>
              </HomeBodyContent>
            </HomeBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default VideoItemDetails
