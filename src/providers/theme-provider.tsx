'use client'

import { useEffect, useState } from 'react'
import ThemeContext from '../context/themeContext'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' &&
    localStorage.getItem('template-theme')
      ? JSON.parse(localStorage.getItem('template-theme')!)
      : false

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage)
  const [renderComponent, setRenderComponent] = useState(false)

  useEffect(() => {
    setRenderComponent(true)
  }, [])

  if (!renderComponent) return <></>

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='bg-white text-[#1E1E1E] transition-all duration-200 dark:bg-black dark:text-white'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
