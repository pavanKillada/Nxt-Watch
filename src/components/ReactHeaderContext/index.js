import React from 'react'

const ReactHeaderContext = React.createContext({
  darkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  onToggleSave: () => {},
})
export default ReactHeaderContext
