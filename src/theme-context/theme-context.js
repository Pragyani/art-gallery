import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const UseTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toogleTheme = () => {
        setIsDarkMode((prevData) => !prevData);
    };
    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkMode])

    return (<ThemeContext.Provider value={{ theme, toogleTheme }}>{children}</ThemeContext.Provider>)
}