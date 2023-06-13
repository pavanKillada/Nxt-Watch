import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  OtherVideoItemLi,
  Thumbnail,
  ThumbnailContent,
  ThumbnailDetails,
  Links,
  ThumbnailViewsAndTime,
  ThumbnailPara,
  OtherThumbnailTitle,
  OtherThumbnailChannelLogo,
} from '../../StyledComponents'

const OtherRoutesVideoItem = props => {
  const {videoDetails, darkTheme} = props
  const time = formatDistanceToNow(new Date(videoDetails.published_at)).split(
    ' ',
  )
  const duration = time.slice(1, 3).join(' ')

  return (
    <Links as={Link} to={`/videos/${videoDetails.id}`}>
      <OtherVideoItemLi>
        <Thumbnail
          otherRouteItem
          src={videoDetails.thumbnail_url}
          alt="video thumbnail"
          height="200px"
        />
        <ThumbnailDetails>
          <OtherThumbnailChannelLogo
            src={videoDetails.channel.profile_image_url}
            alt={videoDetails.channel.name}
            width="50px"
          />
          <ThumbnailContent>
            <OtherThumbnailTitle as="p" darkTheme={darkTheme}>
              {videoDetails.title}
            </OtherThumbnailTitle>
            <ThumbnailPara>{videoDetails.channel.name}</ThumbnailPara>
            <ThumbnailViewsAndTime>
              <ThumbnailPara>{videoDetails.view_count} views</ThumbnailPara>
              <ThumbnailPara as="p">{duration} ago</ThumbnailPara>
            </ThumbnailViewsAndTime>
          </ThumbnailContent>
        </ThumbnailDetails>
      </OtherVideoItemLi>
    </Links>
  )
}
export default OtherRoutesVideoItem
