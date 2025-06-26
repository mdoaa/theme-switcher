import react, { createContext, use, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [isDark, setDark] = useState(false);
    const toggle=() => {
        setDark(prev => !prev);
    }
    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
          
    )
}