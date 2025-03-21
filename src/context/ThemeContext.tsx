import { createContext, ReactNode, useContext, useState } from 'react';

export const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within ThemeContext');

  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(prevState => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export type ThemeProviderProps = {
  children: ReactNode;
}

export type IThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
}