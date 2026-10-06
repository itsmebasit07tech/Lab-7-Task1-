import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const toggleLogin = () => {
    const status = !loggedIn;
    setLoggedIn(status);
    localStorage.setItem("loggedIn", JSON.stringify(status));
  };

  return (
    <UserContext.Provider value={{ loggedIn, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
};