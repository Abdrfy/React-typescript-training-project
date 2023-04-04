import { useState } from "react";
import { Home } from './home'
import ThemeContext from "./theme";
import { ThemeContextType } from "./theme";

const App = () => {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default App