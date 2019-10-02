import React, { useState } from 'react'

// NOTES
  // to SET something to localStorage, we need a key (must be a string) and a value (any type)
    // localStorage.setItem('myCat', 'Tom'); ['myCat' = key; 'Tom' = value]
  // to RETRIEVE something from localStorage, we need the key
    // var cat = localStorage.getItem('myCat'); [reading localStorage using the key]
      // the variable cat = 'Tom'
  // to UPDATE something in localStorage, we use the same method (.setItem()) which will replace the old key:value pair

  // JSON.parse() is a method that breaks down the string into parts then constructs the JS value or object described by the string
    /*
      var json = '{"result":true, "count":42}';
      obj = JSON.parse(json);

      console.log(obj.count);
      // expected output: 42

      console.log(obj.result);
      // expected output: true
    */

export const useLocalStorage = (key, initialValue) => {

  // Setting the state of storedValue to a function which will read localStorage and retrieve our value if it's there. If there is no value associated with that key, it will set up a new localStorage value and retrieve it.
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)){
      return JSON.parse(window.localStorage.getItem(key))
    }else{
      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    }
  })

  // Also, creating the function that will set the state of the value
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}