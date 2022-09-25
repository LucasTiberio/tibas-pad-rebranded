import { useEffect, useState } from "react";
import { useNotepad } from "../state/notepad";
import useDebounce from "./useDebounce";

const useNotepadTextEditor = ({
  requestUpdateAfterDebounce = false,
} = {}) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 600)
  const { updateNotepadContent, notepad } = useNotepad();

  useEffect(() => {
    if (requestUpdateAfterDebounce && notepad?.name) {
      updateNotepadContent(notepad.name, `${debouncedValue}`);
    }
  }, [debouncedValue])

  const handleNotepadTextEditorChange = (value: string) => {
    setValue(value)
  }

  return {
    handleNotepadTextEditorChange
  }
}

export default useNotepadTextEditor;