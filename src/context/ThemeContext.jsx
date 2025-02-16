import { createContext, useState, useMemo, useContext } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'

export const ThemeContext = createContext()

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode')
    return savedMode || 'light'
  })

  const toggleTheme = () => {
    setMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', newMode)
      return newMode
    })
  }

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1A73E8' : '#90CAF9', // Google Blue / Light Blue
        contrastText: mode === 'light' ? '#FFFFFF' : '#000000', // White / Black
      },
      secondary: {
        main: mode === 'light' ? '#FF7043' : '#FFAB91', // Deep Orange / Light Orange
        contrastText: mode === 'light' ? '#FFFFFF' : '#000000', // White / Black
      },
      background: {
        default: mode === 'light' ? '#F5F5F5' : '#121212', // Light Gray / Dark Gray
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E', // White / Dark Gray
      },
      text: {
        primary: mode === 'light' ? '#212121' : '#E0E0E0', // Dark Gray / Light Gray
        secondary: mode === 'light' ? '#757575' : '#BDBDBD', // Gray / Light Gray
      },
      error: {
        main: '#D32F2F', // Red
      },
      warning: {
        main: '#FFA000', // Amber
      },
      info: {
        main: '#1976D2', // Blue
      },
      success: {
        main: '#388E3C', // Green
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 500,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 500,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.75rem',
      },
      body1: {
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 8, // Rounded corners for components
    },
    spacing: 8, // Consistent spacing unit
  }), [mode]);
  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)