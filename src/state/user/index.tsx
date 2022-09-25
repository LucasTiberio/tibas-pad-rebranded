import React, { createContext, useCallback, useContext, useState } from "react";
import loginIntegration from "../../integration/post/login.integration";
import { iUser } from "../../types/user.interface";
import { iUserContext } from "./user-context.interface";

const defaultContext: iUserContext = {
  login: () => null,
};

const UserContext = createContext(defaultContext);

const UserContextProvider: React.FC<iReactComponent> = ({ children }) => {
  const [user, setUser] = useState<iUser>();
  const [token, setToken] = useState<string>();

  const login = useCallback(async (login: string, password: string) => {
    const { success, token, username } = await loginIntegration(login, password)
    if (success) {
      setToken(token)
      setUser({ name: username });
    }
  }, [])

  return (
    <UserContext.Provider value={{
      login,
      user,
      token,
    }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserContext, UserContextProvider, useUser }