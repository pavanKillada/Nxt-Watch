import React from 'react'

const ReactHeaderContext = React.createContext({
  darkTheme: false,
  onChangeTheme: () => {},
})
export default ReactHeaderContext
