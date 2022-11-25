import { useState, createContext } from "react";
import { getAccessTokenFromLS } from "../utils/auth";

const initialAppContext = {
  // isAuthenticated: Boolean(getAccessTokenFromLS()),
  isAuthenticated: true,
};

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticate] = useState(
    initialAppContext.isAuthenticated
  );
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
