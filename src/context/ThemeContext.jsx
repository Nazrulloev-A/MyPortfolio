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
        main: mode === 'light' ? '#2e7d32' : '#66bb6a',
      },
      secondary: {
        main: mode === 'light' ? '#ff5722' : '#ff8a65',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: { fontSize: '3.5rem', fontWeight: 700 },
      h2: { fontSize: '2.5rem', fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: '8px', padding: '12px 24px' }
        }
      }
    }
  }), [mode])

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)