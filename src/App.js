import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { UserContext, UserProvider } from "./context/UserContext";

function MainApp() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedIn, toggleLogin } = useContext(UserContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data[0]));
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>React Hooks Assessment</h1>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

      <br /><br />

      <button onClick={toggleLogin}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <br /><br />

      {loggedIn && user && (
        <h2>Welcome, {user.name}</h2>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <MainApp />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;