import {Link} from 'react-router-dom'
import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  return (
    <Link to={`/videos/${videoDetails.id}`}>
      <li>
        <img src={videoDetails.thumbnail_url} alt="video thumbnail" />
      </li>
    </Link>
  )
}
export default VideoItem
