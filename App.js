import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Counter from "./Counter";


function App() {
const { theme, toggleTheme } = useContext(ThemeContext);


const appStyle = {
backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
color: theme === "light" ? "#000000" : "#ffffff",
minHeight: "100vh",
padding: "40px",
textAlign: "center",
};

return (
<div style={appStyle}>
<h1>Counter & Theme App</h1>
<button onClick={toggleTheme}>
Switch to {theme === "light" ? "Dark" : "Light"} Theme
</button>
<Counter />
</div>
);
}


export default App;