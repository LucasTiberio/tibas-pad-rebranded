import { AppContextProvider } from "./app/app";
import { NotepadContextProvider } from "./notepad";
import { UserContextProvider } from "./user";

const StateProviders: React.FC<iReactComponent> = ({ children }) => {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <NotepadContextProvider>
          {children}
        </NotepadContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  )
}

export default StateProviders;