import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'
import {
  HomeBgContainer,
  HomeBodyContent,
  LeftNavContainer,
} from '../../StyledComponents'

const SavedVideos = () => (
  <ReactHeaderContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <HomeBgContainer darkTheme={darkTheme}>
          <Header />
          <HomeBodyContent darkTheme={darkTheme}>
            <LeftNavContainer>
              <NavRoutes />
            </LeftNavContainer>
          </HomeBodyContent>
        </HomeBgContainer>
      )
    }}
  </ReactHeaderContext.Consumer>
)

export default SavedVideos
