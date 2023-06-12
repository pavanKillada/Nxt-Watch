import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemLi,
  Thumbnail,
  ThumbnailContent,
  ThumbnailDetails,
  Links,
  ThumbnailViewsAndTime,
  ThumbnailPara,
  ThumbnailTitle,
} from '../../StyledComponents'

const VideoItem = props => {
  const {videoDetails, darkTheme} = props
  const time = formatDistanceToNow(new Date(videoDetails.published_at)).split(
    ' ',
  )
  const duration = time.slice(1, 3).join(' ')

  return (
    <Links as={Link} to={`/videos/${videoDetails.id}`}>
      <VideoItemLi>
        <Thumbnail src={videoDetails.thumbnail_url} alt="video thumbnail" />
        <ThumbnailDetails>
          <img
            src={videoDetails.channel.profile_image_url}
            alt="channel logo"
            width="50px"
          />
          <ThumbnailContent>
            <ThumbnailTitle darkTheme={darkTheme}>
              {videoDetails.title}
            </ThumbnailTitle>
            <ThumbnailPara>{videoDetails.channel.name}</ThumbnailPara>
            <ThumbnailViewsAndTime>
              <ThumbnailPara>{videoDetails.view_count} views</ThumbnailPara>
              <ThumbnailPara>{duration} ago</ThumbnailPara>
            </ThumbnailViewsAndTime>
          </ThumbnailContent>
        </ThumbnailDetails>
      </VideoItemLi>
    </Links>
  )
}
export default VideoItem
