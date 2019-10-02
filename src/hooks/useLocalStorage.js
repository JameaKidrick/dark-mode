import React, { useState } from 'react'

// to SET something to localStorage, we need a key (must be a string) and a value (any type)
  // localStorage.setItem('myCat', 'Tom'); ['myCat' = key; 'Tom' = value]
// to RETRIEVE something from localStorage, we need the key
  // var cat = localStorage.getItem('myCat'); [reading localStorage using the key]
    // the variable cat = 'Tom'
// to UPDATE something in localStorage, we use the same method (.setItem()) which will replace the old key:value pair


// We are setting the state of storedValue to a function which will read localStorage and retrieve our value if it's there. If there is no value associated with that key, it will set up a new localStorage value and retrieve it.
export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key))
    }else{
      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    }
  })
}