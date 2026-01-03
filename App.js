import { createContext, useContext, useState } from "react";

/* 1️⃣ Create Context */
const AppContext = createContext();

/* 2️⃣ Provider Component */
function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, count, setCount }}
    >
      {children}
    </AppContext.Provider>
  );
}

/* 3️⃣ Main UI */
function MainApp() {
  const { theme, toggleTheme, count, setCount } =
    useContext(AppContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px",
  };

  return (
    <div style={style}>
      <h1>Theme & Counter</h1>

      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2 style={{ marginTop: "20px" }}>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </div>
  );
}

/* 4️⃣ App Component */
export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

