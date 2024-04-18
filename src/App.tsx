import React from 'react'
import {ThemeProvider} from '@mui/material'
import Home from './page/Home';
import { theme } from './styles/Themes';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App

