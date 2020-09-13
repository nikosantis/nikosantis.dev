
import { createContext, useState, useEffect, useContext, useCallback } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider (props) {
  const [mode, setMode] = useState()

  useEffect(() => {
    setMode(window.isDark ? 'dark' : 'light')
  }, [])

  const toggleDark = useCallback(() => {
    try {
      localStorage.setItem('mode', 'dark')
      setMode('dark')
      document.body.classList.add('dark-mode')
    } catch (err) {
      console.error(err)
    }
  }, [])
  const toggleLight = useCallback(() => {
    setMode('light')
    try {
      localStorage.setItem('mode', 'light')
      setMode('light')
      document.body.classList.remove('dark-mode')
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <DarkModeContext.Provider value={{ mode, toggleDark, toggleLight }} {...props} />
  )
}

function useDarkMode () {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  return context
}

export {
  DarkModeProvider,
  useDarkMode
}
