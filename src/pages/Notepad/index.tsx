import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import NoteHistory from "../../components/NoteHistory";
import NotepadTextEditor from "../../components/NotepadTextEditor";
import useNotepadTextEditor from "../../hooks/useNotepadTextEditor";
import { iReactRoutePage } from "../../router/interface";
import siteMap from "../../router/siteMap";
import { useNotepad } from "../../state/notepad";
import AppPage from "../Page";
import { NotepadTitle, NotepadWrapper } from "./styles";

const NotepadPage: React.FC<iReactRoutePage> = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { notepad, fetchNotepad, loading } = useNotepad();
  const { handleNotepadTextEditorChange } = useNotepadTextEditor({
    requestUpdateAfterDebounce: true,
  });

  useEffect(() => {
    if (!notepad) {
      if (!name) {
        return navigate(siteMap.HomePage.path)
      }

      fetchNotepad(name)
    }
  }, [])

  return (
    <AppPage
      loading={loading}
      header={{
        mainComponent: <NotepadTitle>{notepad?.name}</NotepadTitle>,
        rightComponent: <NoteHistory />,
        goToHomeButton: true,
      }}
    >
      <NotepadWrapper>
        <NotepadTextEditor
          autoFocus
          initialValue={notepad?.content}
          onValueChange={handleNotepadTextEditorChange}
          style={{
            flex: 1,
            height: '100%',
          }}
        />
      </NotepadWrapper>
    </AppPage>
  )
}

export default NotepadPage