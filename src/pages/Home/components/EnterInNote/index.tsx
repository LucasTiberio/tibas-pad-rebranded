import { ChangeEvent, MouseEvent, useState } from "react"
import Spinner from "../../../../components/Spinner";
import { Container, EnterInNoteButton as Button, EnterInNoteInput as Input, ENTER_IN_NOTE_BUTTON_SIZE } from "./styles"

interface Props {
  onSubmit: (value: string) => void;
  loading?: boolean
}
const EnterInNote: React.FC<Props> = ({ onSubmit, loading }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }

  const handleSubmit = () => {
    onSubmit(value)
  }

  return (
    <Container opened={!loading}>
      <Input
        placeholder='type a note name'
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>
        {loading ? <Spinner size={ENTER_IN_NOTE_BUTTON_SIZE - 7} /> : '→'} 
      </Button>
    </Container>
  )
}

export default EnterInNote