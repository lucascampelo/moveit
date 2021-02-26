import { createContext, useState } from "react";

interface ThemeContextData {
    isDark: boolean;
    toggleDarkMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({children}) {

    const [isDark, setIsDark] = useState(false);

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