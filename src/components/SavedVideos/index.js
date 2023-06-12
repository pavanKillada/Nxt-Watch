import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import OtherRoutesVideoItem from '../OtherRoutesVideoItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  HomeBgContainer,
  HomeBodyContent,
  LeftNavContainer,
  OtherVideosContainer,
  VideosBgContainer,
  TrendingHeader,
  IconContainer,
  TrendingHeaderText,
  NoSavedContainer,
  FailureHead,
  FailurePara,
  OtherVideosUl,
} from '../../StyledComponents'

const SavedVideos = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      const renderEmptyView = () => (
        <NoSavedContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            width="50%"
          />
          <FailureHead darkTheme={darkTheme}>No saved videos found</FailureHead>
          <FailurePara>
            You can save your videos while watching them
          </FailurePara>
        </NoSavedContainer>
      )

      const renderSavedList = () => (
        <>
          <TrendingHeader darkTheme={darkTheme}>
            <IconContainer darkTheme={darkTheme}>
              <HiFire />
            </IconContainer>
            <TrendingHeaderText darkTheme={darkTheme}>
              Saved Videos
            </TrendingHeaderText>
          </TrendingHeader>
          <VideosBgContainer darkTheme={darkTheme}>
            <OtherVideosUl>
              {savedVideos.map(item => (
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

      return (
        <HomeBgContainer darkTheme={darkTheme}>
          <Header />
          <HomeBodyContent darkTheme={darkTheme}>
            <LeftNavContainer darkTheme={darkTheme}>
              <NavRoutes />
            </LeftNavContainer>
            <OtherVideosContainer darkTheme={darkTheme}>
              {savedVideos.length === 0 ? renderEmptyView() : renderSavedList()}
            </OtherVideosContainer>
          </HomeBodyContent>
        </HomeBgContainer>
      )
    }}
  </ReactHeaderContext.Consumer>
)

export default SavedVideos
