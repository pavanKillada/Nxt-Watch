import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

export const Nav = styled.nav`
  background-color: ${prop => (prop.darkTheme ? '#212121' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`
export const NavIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`
export const Ul = styled.ul`
  padding: 0;
`
export const NavBarsIconLi = styled.li`
  margin-right: 10px;
  @media (min-width: 768px) {
    margin-right: 20px;
    display: none;
  }
`
export const NavIconsLi = styled.li`
  margin-right: 10px;
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  color: ${prop => (prop.darkTheme ? 'white' : 'black')};
`
export const ProfileBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const NavProfileIconLi = styled.li`
  display: none;
  margin-right: 20px;
  @media (min-width: 768px) {
    display: inline;
  }
`
export const ActiveBar = styled.p`
  color: red;
`
export const NavLogoutIconLi = styled.li`
  @media (min-width: 768px) {
    display: none;
  }
`
export const NavLogoutBtnLi = styled.li`
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`
export const LogoutBtn = styled.button`
  border: 1px solid ${prop => (prop.darkTheme ? 'white' : '#3b82f6')};
  color: ${prop => (prop.darkTheme ? 'white' : '#3b82f6')};
  background-color: transparent;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 13px;
  font-family: 'roboto';
  outline: none;
  cursor: pointer;
`
export const BarRoutesDivContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  background-color: ${prop => (prop.darkTheme ? '#181818' : '#f9f9f9')};
  text-align: center;
  padding: 20px;
  border-radius: 8px;
`
export const PopupText = styled.p`
  color: ${prop => (prop.darkTheme ? 'white' : '#212121')};
  font-size: 18px;
  font-family: 'roboto';
`
export const PopupBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const CancelBtn = styled.button`
  border: 1px solid ${prop => (prop.darkTheme ? 'white' : '#212121')};
  border-radius: 5px;
  padding: 10px 20px;
  background-color: transparent;
  color: ${prop => (prop.darkTheme ? 'white' : '#212121')};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'roboto';
  margin-right: 20px;
`
export const ConfirmBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'roboto';
`
export const BarRoutesContainer = styled.ul`
  background-color: ${prop => (prop.darkTheme ? '#212121' : '#f9f9f9')};
  padding: 0;
`
export const LiRoute = styled.li`
  background-color: ${prop => {
    if (prop.isActive) {
      if (prop.darkTheme) {
        return '#181818'
      }
      return '#d7dfe9'
    }
    return 'transparent'
  }};
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0px 20px;
`
export const RouteIcons = styled.p`
  font-size: 20px;
  color: ${props => (props.isActive ? 'red' : 'gray')};
  margin-right: 30px;
  font-weight: bold;
`
export const RouteText = styled.p`
  font-size: 18px;
  font-family: 'roboto';
  color: ${prop => (prop.darkTheme ? 'white' : '#212121')};
  font-weight: ${props => (props.isActive ? 'bold' : 'none')};
`
export const Links = styled.li`
  text-decoration: none;
`
export const LoginBgContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const FormContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  padding: 20px;
  border-radius: 50px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  font-family: roboto;
  border-radius: ${props => (props.darkTheme ? '10px' : 0)};
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`
export const LoginWebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 30px;
`
export const Label = styled.label`
  color: ${props => (props.darkTheme ? 'white' : 'gray')};
  font-size: 12px;
  font-weight: bold;
`
export const UserInput = styled.input`
  min-width: 300px;
  padding: 10px 15px;
  color: gray;
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 25px;
  border: 0.5px solid gray;
  outline: none;
  background-color: transparent;
  @media (max-width: 576px) {
    min-width: 100%;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: '#ffffff';
  font-size: 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  padding: 8px;
  margin-top: 15px;
  margin-bottom: 30px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`
export const HomeBgContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
export const TrendingBgContainer = styled(HomeBgContainer)`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const HomeBodyContent = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftNavContainer = styled.div`
  width: 30%;
  max-width: 300px;
  display: none;
  min-height: 95vh;
  @media (min-width: 768px) {
    display: block;
  }
`
export const BannerAndVideoContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.darkTheme ? 'black' : '#f1f5f9')};
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 20px;
`
export const BannerLogo = styled.img`
  margin-top: 20px;
`
export const BannerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CrossBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  color: black;
`
export const BannerText = styled.p`
  font-size: 20px;
  font-family: 'roboto';
  font-weight: 500;
  max-width: 350px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const BannerBtn = styled.button`
  border: 1px solid #212121;
  background-color: transparent;
  color: #212121;
  padding: 10px 15px;
  font-size: 16px;
  font-family: 'roboto';
  margin-bottom: 20px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`
export const VideosBgContainer = styled.div`
  background-color: ${props => (props.darkTheme ? 'black' : '#f1f5f9')};
  padding: 20px;
  width: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
  background-color: ${props => (props.darkTheme ? '#212121' : 'transparent')};
`
export const SearchInput = styled.input`
  border: none;
  padding: 8px 15px;
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  color: ${props => (props.darkTheme ? 'gray' : 'black')};
  font-size: 16px;
  font-family: 'roboto';
  width: 85%;
  border-right: 1px solid lightgray;
  outline: none;
`
export const SearchBtn = styled.button`
  width: 15%;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: gray;
  background-color: transparent;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideosUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow-y: auto;
  padding: 0;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
export const OtherThumbnailChannelLogo = styled.img`
  @media (min-width: 576px) {
    display: none;
  }
`
export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background-color: transparent;
  font-family: 'roboto';
  text-align: center;
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: white;
  font-family: 'roboto';
  outline: none;
  border: none;
  padding: 10px 25px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
`
export const FailureHead = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 30px;
  margin-bottom: 0;
  font-weight: 400;
`
export const FailurePara = styled.p`
  color: gray;
  font-size: 18px;
  line-height: 2;
`
export const VideoItemLi = styled.li`
  list-style: none;
  max-width: 100%;
  margin: 20px;
  @media (min-width: 576px) {
    width: 220px;
  }
  @media (min-width: 800px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 280px;
  }
`
export const OtherVideosUl = styled.ul`
  width: 100%;
  height: 75vh;
  overflow: auto;
  padding: 0;
`
export const OtherVideoItemLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 20px;
  @media (min-width: 576px) {
    display: flex;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media (min-width: 576px) {
    width: ${props => (props.otherRouteItem ? '300px' : '100%')};
  }
`
export const ThumbnailDetails = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  padding: 10px;
`
export const ThumbnailContent = styled.div`
  font-family: 'roboto';
  margin-left: 20px;
`
export const ThumbnailViewsAndTime = styled.div`
  display: flex;
  align-items: center;
`
export const ThumbnailTitle = styled.p`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  margin-top: 0;
  font-size: 16px;
  font-weight: 400;
`
export const OtherThumbnailTitle = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  margin-top: 0;
  font-size: 16px;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 20px;
    font-weight: 500px;
  }
`
export const ThumbnailPara = styled.p`
  margin-top: 0;
  color: gray;
  font-size: 16px;
  margin-right: 15px;
`
export const PopupLeftNavbar = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  max-width: 300px;
  font-family: 'roboto';
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`
export const PopupLayover = styled.div`
  background: rgb(0, 0, 0, 0.5);
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const PopupContent = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  height: 100vh;
  width: 70%;
  max-width: 350px;
  font-family: 'roboto';
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 15px 0px;
`
export const PopupCancelBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 20px;
  margin-left: auto;
  margin-right: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  margin-bottom: 20px;
`
export const ContactUsContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  font-family: 'roboto';
  margin-top: auto;
  display: flex;
  flex-direction: column;
`
export const ContactHead = styled.p`
  color: ${props => (props.darkTheme ? 'white' : '#212121')};
  font-size: 18px;
  margin-top: auto;
`
export const ContactIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ContactPara = styled.p`
  color: gray;
  font-size: 17px;
`
export const LeftNavRoutesAndContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const ContactImg = styled.img`
  margin-right: 20px;
`
export const LogoutPopup = styled(Popup)`
  &-overlay {
    background: rgb(0, 0, 0, 0.5);
  }
`
export const OtherVideosContainer = BannerAndVideoContainer

export const TrendingHeader = styled.div`
  background-color: ${props => (props.darkTheme ? '#313131' : '#ebebeb')};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'roboto';
  padding: 30px;
`
export const IconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? 'black' : '#cbd5e1')};
  border-radius: 50px;
  font-size: 30px;
  color: red;
  text-align: center;
  margin-right: 20px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingHeaderText = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
`
export const GamingVideosUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 75vh;
  overflow-y: auto;
`
export const GameItemLi = styled.li`
  width: 160px;
  margin-right: 20px;
  margin-bottom: 30px;
  font-family: 'roboto';
  list-style: none;
  @media (min-width: 576px) {
    width: 230px;
  }
  @media (min-width: 850px) {
    width: 280px;
  }
`
export const GameItemHead = styled.h1`
  font-size: 16px;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  margin-bottom: 0;
  @media (min-width: 576px) {
    font-size: 20px;
  }
`
export const GameItemViews = styled.p`
  color: gray;
  font-size: 16px;
  @media (min-width: 576px) {
    font-size: 18px;
  }
`
export const NoSavedContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
  text-align: center;
`
export const PlayerContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  font-family: 'roboto';
`

export const PlayerComponent = styled(ReactPlayer)`
  width: 100%;
`
export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 30px;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
`
export const VideoDetailsContent = styled.div`
  padding: 20px;
`
export const VideoDetailsBtns = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100px;
  margin-right: 20px;
  margin-top: 20px;
  font-size: 20px;
  color: ${props =>
    props.like || props.dislike || props.save ? '#2563eb' : '#64748b'};
  @media (min-width: 868px) {
    margin-top: 0;
  }
`
export const HrLine = styled.hr`
  border: 1px solid 'light-gray';
  margin-top: 20px;
  margin-bottom: 20px;
`
export const FlexContainer = styled.div`
  @media (min-width: 868px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoDetailsOfChannelDetails = styled.div`
  display: flex;
  align-items: center;
  font-family: 'roboto';
`
export const VideoDetailsOfChannelNameAndSub = styled.div`
  padding-left: 20px;
`
export const ChannelDescription = styled.p`
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#424242')};
  font-weight: ${props => (props.channel ? 'bold' : 'normal')};
  font-size: 18px;
  @media (min-width: 868px) {
    margin-left: ${props => (props.channel ? '0px' : '100px')};
  }
`
export const Subscribers = styled.p`
  color: gray;
  font-size: 16px;
`
