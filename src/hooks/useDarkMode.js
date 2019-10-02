import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

// QUESTIONS
  // WHERE IS THE KEY 'FALSE' COMING FROM IN THE APPLICATION LOCAL STORAGE?
  // WHAT IS THE POINT OF KEY HERE (LINES 8 AND 9)?
  // WHY DID I HAVE TO PUT ALL OF LINE 9?
  // WHAT IS LINE 13'S STOREDVALUE ACTUALLY CHANGING?
  // OVERALL, HOW ARE THESE HOOKS WORKING TOGETHER?
  
export const useDarkMode = (key) => {
  const [storedValue, setValue] = useLocalStorage(key)

  useEffect(() => {
    storedValue === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
  }, [storedValue])

  return [storedValue, setValue]
}