import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

interface ThemeContextData {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children, ...rest }) {
  const isDarkCookie: any = rest.isDark;

  const [isDark, setIsDark] = useState(isDarkCookie ? true : false);

  useEffect(() => {
    Cookies.set('isDark', isDark ? '1' : '0');

  }, [isDark]);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  return <ThemeContext.Provider value={{
    isDark,
    toggleDarkMode
  }}>
    {children}
  </ThemeContext.Provider>
}