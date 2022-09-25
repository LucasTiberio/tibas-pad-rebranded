import React from "react";
import NoteHistory from "../../components/NoteHistory";
import useNoteRouter from "../../hooks/useNoteRouter";
import { iReactRoutePage } from "../../router/interface";
import { useNotepad } from "../../state/notepad";
import AppPage from "../Page";
import EnterInNote from "./components/EnterInNote";
import { Container, HomeTextWithContrast, HomeTitle } from "./styles";

const HomePage: React.FC<iReactRoutePage> = () => {
  const { loading } = useNotepad();
  const { goToNote } = useNoteRouter();

  const handleGoToNote = async (noteName: string) => {
    goToNote(noteName);
  }

  return (
    <AppPage loading={false} header={{
      mainComponent: <NoteHistory />
    }}>
      <Container>
        <HomeTitle>
          The <HomeTextWithContrast>#1</HomeTextWithContrast><br />
          Virtual Notepad <br />
          for you
        </HomeTitle>
        <EnterInNote
          onSubmit={handleGoToNote}
          loading={loading}
        />
      </Container>
    </AppPage>
  )
}

export default HomePage;