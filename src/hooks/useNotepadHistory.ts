import { useMemo } from 'react';
import useCookie from 'react-use-cookie';

interface iNoteHistory {
  name: string;
  protection: boolean;
}

const useNoteHistory = () => {
  const [noteHistory, setNoteHistory] = useCookie('noteHistory', '');

  const normalizedNoteHistory = useMemo(() => {
    try {
      const base64Decrypted = atob(noteHistory);
      const parsedValue: iNoteHistory[] = JSON.parse(base64Decrypted);

      return parsedValue || [];
    } catch (error) {
      return [];
    }
  }, [noteHistory]);

  const adaptToCookieString = (notes: iNoteHistory[]) => {
    const stringified = JSON.stringify(notes);
    const base64Encrypted = btoa(stringified);

    return base64Encrypted;
  }

  const noteExistsOnHistory = (note: iNoteHistory) => 
    normalizedNoteHistory.findIndex(_note => _note.name === note.name) !== -1

  const addNoteToHistory = (note: iNoteHistory) => {
    if (noteExistsOnHistory(note)) return;

    const newNoteHistory = [...normalizedNoteHistory, note]
    const adaptedNewNoteHistory = adaptToCookieString(newNoteHistory);

    setNoteHistory(adaptedNewNoteHistory);
  }

  const resetHistory = () => setNoteHistory('');

  return {
    noteHistory: normalizedNoteHistory,
    addNoteToHistory,
    resetHistory,
  }
}

export default useNoteHistory