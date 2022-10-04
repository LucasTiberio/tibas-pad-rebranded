import React, { createContext, useCallback, useContext, useState } from "react";
import getNotepadDetails from "../../integration/get/getNotepadDetails.integration";
import updateNotepadContentIntegration from "../../integration/post/updateNotepadContent.integration";
import { iNotepad } from "../../types/notepad.interface";
import sleep from "../../common/utils/sleep";
import { iFetchNotepadOption, iGoToNotepadOptions, iNotepadContext } from "./user-notepad.interface";
import { useNavigate } from "react-router-dom";
import useNoteHistory from "../../hooks/useNotepadHistory";

const defaultContext: iNotepadContext = {
  fetchNotepad: async () => undefined,
  updateNotepadContent: async () => false,
  loading: false,
  updating: false,
};

const NotepadContext = createContext(defaultContext);

const NotepadContextProvider: React.FC<iReactComponent> = ({ children }) => {
  const { addNoteToHistory } = useNoteHistory();
  const [notepad, setNotepad] = useState<iNotepad>();
  const [currentProtection, setCurrentProtection] = useState('');

  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  
  const fetchNotepad = useCallback(async (name: string, {
    protection = currentProtection,
    withDelay
  }: iFetchNotepadOption = {}) => {
    setLoading(true)

    const notepadDetails = await getNotepadDetails(name, protection);

    if (notepadDetails) {
      setNotepad(notepadDetails);
      if (protection) setCurrentProtection(protection)

      addNoteToHistory({
        name: notepadDetails.name,
        protection: !!notepadDetails.protection,
      })
    } else {
      setNotepad(undefined);
      setCurrentProtection('');
    }

    if (withDelay) {
      await sleep(1500);
    }

    setLoading(false)
  }, [currentProtection])

  const updateNotepadContent = useCallback(async (name: string, content: string, protection = currentProtection) => {
    if (notepad?.content === content) return true;
    setUpdating(true);

    const statusUpdateNotepadContent = await updateNotepadContentIntegration(name, content, protection)
    setUpdating(false);
    
    return !!statusUpdateNotepadContent;
  }, [notepad?.content])

  return (
    <NotepadContext.Provider value={{
      fetchNotepad,
      loading,
      updating,
      updateNotepadContent,
      notepad,
    }}>
      {children}
    </NotepadContext.Provider>
  )
}

const useNotepad = () => useContext(NotepadContext)

export { NotepadContext, NotepadContextProvider, useNotepad }