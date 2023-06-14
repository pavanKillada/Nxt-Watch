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
  HrLine,
  FlexContainer,
  ChannelDescription,
  Subscribers,
  VideoDetailsOfChannelNameAndSub,
  VideoDetailsOfChannelDetails,
  TrendingBgContainer,
} from '../../StyledComponents'

const fetchStatus = {
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    fetching: fetchStatus.inProgress,
    videoDetails: {},
    liked: false,
    disliked: false,
    saved: false,
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
        const savedVideos = JSON.parse(localStorage.getItem('saved_videos'))
        if (savedVideos !== null) {
          const thisVideo = savedVideos.find(video => {
            if (video.id === data.video_details.id) {
              return video
            }
            return undefined
          })
          if (thisVideo !== undefined) {
            this.setState({saved: true})
          }
        }
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

  onClickLike = () => {
    this.setState(prev => ({liked: !prev.liked, disliked: false}))
  }

  onClickDislike = () => {
    this.setState(prev => ({disliked: !prev.disliked, liked: false}))
  }

  onClickSave = toggleSave => {
    const {videoDetails, saved} = this.state
    this.setState({saved: !saved}, toggleSave(videoDetails, !saved))
  }

  onRetry = () => {
    this.componentDidMount()
  }

  renderVideoDetails = (darkTheme, onToggleSave) => {
    const {videoDetails} = this.state
    const time = formatDistanceToNow(new Date(videoDetails.published_at)).split(
      ' ',
    )
    const duration = time.slice(1, 3).join(' ')
    const {liked, disliked, saved} = this.state

    return (
      <PlayerContainer>
        <PlayerComponent width="100%" controls url={videoDetails.video_url} />
        <VideoDetailsContent>
          <VideoTitle as="p" darkTheme={darkTheme}>
            {videoDetails.title}
          </VideoTitle>
          <FlexContainer>
            <ThumbnailViewsAndTime>
              <ThumbnailPara>{videoDetails.view_count} views</ThumbnailPara>
              <ThumbnailPara as="p">{duration} ago</ThumbnailPara>
            </ThumbnailViewsAndTime>
            <ThumbnailViewsAndTime>
              <VideoDetailsBtns
                like={liked}
                onClick={this.onClickLike}
                type="button"
              >
                <BiLike /> Like
              </VideoDetailsBtns>
              <VideoDetailsBtns
                dislike={disliked}
                onClick={this.onClickDislike}
                type="button"
              >
                <BiDislike /> Dislike
              </VideoDetailsBtns>
              <VideoDetailsBtns
                onClick={() => {
                  this.onClickSave(onToggleSave)
                }}
                type="button"
                save={saved}
              >
                <BiListPlus /> {saved ? 'Saved' : 'Save'}
              </VideoDetailsBtns>
            </ThumbnailViewsAndTime>
          </FlexContainer>
          <HrLine />
          <VideoDetailsOfChannelDetails>
            <img
              src={videoDetails.channel.profile_image_url}
              alt="channel logo"
              width="80px"
            />
            <VideoDetailsOfChannelNameAndSub>
              <ChannelDescription darkTheme={darkTheme} channel>
                {videoDetails.channel.name}
              </ChannelDescription>
              <Subscribers>
                {videoDetails.channel.subscriber_count} Subscribers
              </Subscribers>
            </VideoDetailsOfChannelNameAndSub>
          </VideoDetailsOfChannelDetails>
          <ChannelDescription darkTheme={darkTheme}>
            {videoDetails.description}
          </ChannelDescription>
        </VideoDetailsContent>
      </PlayerContainer>
    )
  }

  render() {
    return (
      <ReactHeaderContext.Consumer>
        {value => {
          const {darkTheme, onToggleSave, savedVideos} = value

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

          const renderVideoDetailsView = () => {
            const {fetching} = this.state
            switch (fetching) {
              case 'FAILED':
                return renderFailureView()

              case 'IN_PROGRESS':
                return renderLoader()

              default:
                return this.renderVideoDetails(
                  darkTheme,
                  onToggleSave,
                  savedVideos,
                )
            }
          }

          return (
            <TrendingBgContainer
              data-testid="videoItemDetails"
              darkTheme={darkTheme}
            >
              <Header />
              <HomeBodyContent darkTheme={darkTheme}>
                <LeftNavContainer darkTheme={darkTheme}>
                  <NavRoutes />
                </LeftNavContainer>
                <OtherVideosContainer darkTheme={darkTheme}>
                  {renderVideoDetailsView()}
                </OtherVideosContainer>
              </HomeBodyContent>
            </TrendingBgContainer>
          )
        }}
      </ReactHeaderContext.Consumer>
    )
  }
}

export default VideoItemDetails
