import { iNoteHistoryComponent } from "./interface"
import { openSpotlight, SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useMemo } from "react";
import useNoteHistory from "../../hooks/useNotepadHistory";
import useNotepadRouter from "../../hooks/useNotepadRouter";
import { Button } from "@mantine/core";
import RecentButton from "./components/RecentButton";

const NoteHistory: React.FC<iNoteHistoryComponent> = ({ style }) => {
  const { noteHistory } = useNoteHistory();
  const { goToNote } = useNotepadRouter();

  const handleSelectNoteInHistory = (action: SpotlightAction) => {
    goToNote(action.title, { withDelay: true })
  }

  const noteHistoryActions: SpotlightAction[] = useMemo(() => {
    return noteHistory.map(note => ({
      title: note.name,
      description: `${note.protection ? 'Atenção! Está nota possui senha' : 'Selecione para entrar'}`,
      onTrigger: handleSelectNoteInHistory,
      // icon: ''
    }))
  }, []);

  const handleOpenSpotlight = () => openSpotlight();

  return (
    <SpotlightProvider
      actions={noteHistoryActions}
      // searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Busque em seu histórico"
      nothingFoundMessage="Nenhuma nota encontrada com este nome"
    >
      <RecentButton onClick={handleOpenSpotlight} >
        show recents
      </RecentButton>
    </SpotlightProvider>
  )
}

export default NoteHistory