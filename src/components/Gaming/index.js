import Header from '../Header'
import ReactHeaderContext from '../ReactHeaderContext'
import {
  HomeBodyContent,
  HomeBgContainer,
  LeftNavContainer,
} from '../../StyledComponents'
import NavRoutes from '../NavRoutes'

const Gaming = () => (
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

export default Gaming
