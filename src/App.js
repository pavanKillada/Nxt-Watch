import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ReactHeaderContext from './components/ReactHeaderContext'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onToggleSave = () => {}

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
        </Switch>
      </ReactHeaderContext.Provider>
    )
  }
}

export default App
