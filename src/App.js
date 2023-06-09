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

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <ReactHeaderContext.Provider
        value={{darkTheme, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </ReactHeaderContext.Provider>
    )
  }
}

export default App
