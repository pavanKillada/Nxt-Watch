import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ReactHeaderContext from './components/ReactHeaderContext'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
  }

  componentDidMount() {
    const savedVideos = JSON.parse(localStorage.getItem('saved_videos'))
    if (savedVideos !== null) {
      this.setState({savedVideos})
    }
  }

  onChangeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onToggleSave = (videoDetails, saving) => {
    const localSavedVideos = JSON.parse(localStorage.getItem('saved_videos'))
    if (localSavedVideos === null) {
      localStorage.setItem('saved_videos', JSON.stringify([videoDetails]))
      this.setState({savedVideos: [videoDetails]})
    } else if (saving === true) {
      localStorage.setItem(
        'saved_videos',
        JSON.stringify([...localSavedVideos, videoDetails]),
      )
      this.setState({savedVideos: [...localSavedVideos, videoDetails]})
    } else {
      const filteredVideos = localSavedVideos.filter(
        video => video.id !== videoDetails.id,
      )
      localStorage.setItem('saved_videos', JSON.stringify(filteredVideos))
      this.setState({savedVideos: filteredVideos})
    }
  }

  render() {
    const {darkTheme, savedVideos} = this.state
    return (
      <ReactHeaderContext.Provider
        value={{
          darkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          onToggleSave: this.onToggleSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactHeaderContext.Provider>
    )
  }
}

export default App
