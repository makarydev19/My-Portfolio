'use client'

import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'
import { useContext } from 'react'
import ThemeContext from '@/src/context/themeContext'

const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <ul>
        <li className=''>
          {darkTheme ? (
            <MdOutlineLightMode
              className='ml-4 size-6 cursor-pointer'
              onClick={() => {
                setDarkTheme(false)
                localStorage.removeItem('mcc-theme')
              }}
            />
          ) : (
            <MdDarkMode
              className='ml-4 size-6 cursor-pointer'
              onClick={() => {
                setDarkTheme(true)
                localStorage.setItem('mcc-theme', 'true')
              }}
            />
          )}
        </li>
      </ul>
    </>
  )
}

export default ToggleTheme
