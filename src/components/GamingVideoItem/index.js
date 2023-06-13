import {Link} from 'react-router-dom'
import {
  Links,
  GameItemLi,
  GameItemHead,
  GameItemViews,
} from '../../StyledComponents'

const GamingVideoItem = props => {
  const {videoDetails, darkTheme} = props
  return (
    <Links as={Link} to={`videos/${videoDetails.id}`}>
      <GameItemLi>
        <img
          src={videoDetails.thumbnail_url}
          alt="video thumbnail"
          width="100%"
        />
        <GameItemHead as="p" darkTheme={darkTheme}>
          {videoDetails.title}
        </GameItemHead>
        <GameItemViews>
          {videoDetails.view_count} Watching Worldwide
        </GameItemViews>
      </GameItemLi>
    </Links>
  )
}
export default GamingVideoItem
