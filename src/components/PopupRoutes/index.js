import {
  PopupLayover,
  PopupContent,
  PopupCancelBtn,
} from '../../StyledComponents'
import ReactHeaderContext from '../ReactHeaderContext'
import NavRoutes from '../NavRoutes'

const PopupRoutes = props => {
  const {onCancelPopup} = props
  const onClickCancel = () => {
    onCancelPopup()
  }

  return (
    <ReactHeaderContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <PopupLayover>
            <PopupContent darkTheme={darkTheme}>
              <PopupCancelBtn
                onClick={onClickCancel}
                type="button"
                darkTheme={darkTheme}
              >
                {' '}
                X{' '}
              </PopupCancelBtn>
              <NavRoutes />
            </PopupContent>
          </PopupLayover>
        )
      }}
    </ReactHeaderContext.Consumer>
  )
}
export default PopupRoutes
