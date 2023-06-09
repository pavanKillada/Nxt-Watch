import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${prop => (prop.darkTheme ? '#212121' : 'white')};
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
export const NavBarsIconLi = styled.li`
  margin-right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Ul = styled.ul`
  padding: 0;
  list-style: none;
`
export const NavIconsLi = styled.li`
  margin-right: 20px;
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
  background-color: ${prop => (prop.darkTheme ? 'black' : 'white')};
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
export const ConformBtn = styled.button`
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
