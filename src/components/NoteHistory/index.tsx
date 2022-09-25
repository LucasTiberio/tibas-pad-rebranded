import { iNoteHistoryComponent } from "./interface"
import { openSpotlight, SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useMemo } from "react";
import useNoteHistory from "../../hooks/useNotepadHistory";
import useNoteRouter from "../../hooks/useNoteRouter";
import { Button } from "@mantine/core";

const NoteHistory: React.FC<iNoteHistoryComponent> = ({ style }) => {
  const { noteHistory } = useNoteHistory();
  const { goToNote } = useNoteRouter();

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
      <Button
        onClick={handleOpenSpotlight}
        variant="default"
        color="dark"
        size="xs"
        uppercase
      >
        show recents
      </Button>
    </SpotlightProvider>
  )
}

export default NoteHistory