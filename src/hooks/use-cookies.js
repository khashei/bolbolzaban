/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { useState } from 'react';

// Usage
// function App() {
//   // Similar to useState but first arg is key to the value in local storage.
//   const [name, setName] = useCookies('name', 'Bob', 2);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//     </div>
//   );
// }

// TODO RMAN change the local storage to cookie
function useCookies(key, initialValue, daysToExpire) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      document.cookie = `${key}=${initialValue}; expires=${date.toGMTString()}`;
      // const item = window.localStorage.getItem(key);
      // return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useCookies;
