import { ThemeContext } from "./themecontext";
import React, { useContext } from "react";

function App() {
  const { isDark, toggle } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? "#fff" : "#000",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };
  
  return (
    <div style={style}>
      <h1>Theme Switcher</h1>
      <p>Switch between light and dark themes.</p>
      <p>Use the toggle button to change the theme.</p>
      <button onClick={toggle}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
