import React, {useState} from 'react'
import { createContext  } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {
  const [ darkTheme, setDarkTheme ] = useState(false);

  return (
            <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
                {children}
            </ThemeContext.Provider>
  )
}

export default ThemeContextProvider