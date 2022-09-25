import { useNavigate } from "react-router-dom";
import { useNotepad } from "../state/notepad";
import { iGoToNotepadOptions } from "../state/notepad/user-notepad.interface";

const useNotepadRouter = () => {
  const navigate = useNavigate();
  const { fetchNotepad } = useNotepad();

  const goToNote = async (name: string, {
    protection,
    withDelay,
  }: iGoToNotepadOptions = {}) => {
    await fetchNotepad(name, {
      withDelay,
      protection,
    });

    navigate(`/${name}`);
  }
  return {
    goToNote,
  }
}

export default useNotepadRouter;