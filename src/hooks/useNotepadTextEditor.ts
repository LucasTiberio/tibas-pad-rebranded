import { useEffect, useRef, useState } from "react";
import { useNotepad } from "../state/notepad";
import useDebounce from "./useDebounce";

const useNotepadTextEditor = ({
  requestUpdateAfterDebounce = false,
} = {}) => {
  const { updateNotepadContent, notepad, loading } = useNotepad();
  const [value, setValue] = useState(notepad?.content || '');
  const debouncedValue = useDebounce(value, 600)

  useEffect(() => {
    const contentIsDifferent = notepad?.content !== value;

    if (notepad?.name && contentIsDifferent) {
      if (requestUpdateAfterDebounce) updateNotepadContent(notepad.name, `${debouncedValue}`);
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