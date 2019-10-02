import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage(key)

  useEffect(() => {
    storedValue === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
  }, [storedValue])

  return [storedValue, setValue]
}