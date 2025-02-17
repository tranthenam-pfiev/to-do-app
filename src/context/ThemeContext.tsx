import React, { createContext, useState, useContext, ReactNode } from 'react';

// Định nghĩa type cho context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Tạo context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
        return newTheme;
      });
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

// Custom hook để sử dụng ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme phải được sử dụng trong ThemeProvider');
  }
  return context;
};
