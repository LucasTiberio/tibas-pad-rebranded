import React, { createContext, useContext, useMemo } from "react";
import { iAppContext } from "./app-context.interface";

const defaultContext: iAppContext = {
  isTouchableDevice: false,
};

const AppContext = createContext(defaultContext);

const AppContextProvider: React.FC<iReactComponent> = ({ children }) => {
  const isTouchableDevice = useMemo(() => {
    if (window && ('ontouchstart' in window)) return true;
    return false;
  }, [window])

  return (
    <AppContext.Provider value={{
      isTouchableDevice,
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { AppContext, AppContextProvider, useAppContext }