import ReactHeaderContext from '../ReactHeaderContext'
import {
  FailureHead,
  FailurePara,
  NoSavedContainer,
  HomeBgContainer,
  HomeBodyContent,
  LeftNavContainer,
  OtherVideosContainer,
} from '../../StyledComponents'
import Header from '../Header'
import NavRoutes from '../NavRoutes'

const NotFound = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <HomeBgContainer darkTheme={darkTheme}>
          <Header />
          <HomeBodyContent darkTheme={darkTheme}>
            <LeftNavContainer darkTheme={darkTheme}>
              <NavRoutes />
            </LeftNavContainer>
            <OtherVideosContainer darkTheme={darkTheme}>
              <NoSavedContainer>
                <img
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                  width="50%"
                />
                <FailureHead darkTheme={darkTheme}>Page Not Found</FailureHead>
                <FailurePara>
                  We are sorry, the page you requested could not be found.
                </FailurePara>
              </NoSavedContainer>
            </OtherVideosContainer>
          </HomeBodyContent>
        </HomeBgContainer>
      )
    }}
  </ReactHeaderContext.Consumer>
)
export default NotFound
