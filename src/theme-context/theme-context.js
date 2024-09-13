import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const UseTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toogleTheme = () => {
        setIsDarkMode((prevData) => !prevData);
    };

    const theme = isDarkMode ? "dark" : "light";

    return (<ThemeContext.Provider value={{ theme, toogleTheme }}>{children}</ThemeContext.Provider>)
}