import { iNotepad } from "../../types/notepad.interface";

export interface iFetchNotepadOption {
  protection?: string;
  withDelay?: boolean;
}

export interface iGoToNotepadOptions extends iFetchNotepadOption {
}

export interface iNotepadContext {
  notepad?: iNotepad;
  loading: boolean;
  updating: boolean;
  fetchNotepad: (name: string, options?: iFetchNotepadOption) => Promise<void>
  updateNotepadContent: (name: string, content: string, protection?: string) => Promise<boolean>
}