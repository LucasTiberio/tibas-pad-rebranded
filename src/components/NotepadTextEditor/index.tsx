import { useEffect, useMemo, useRef, useState } from "react";
import RichTextEditor, { Editor } from "@mantine/rte";
import { iNotepadTextEditor } from "./interface";
import { Wrapper } from "./styles";
import { ToolbarControl } from "@mantine/rte/lib/components/Toolbar/controls";

const NotepadTextEditor: React.FC<iNotepadTextEditor> = ({ onImageUpload, autoFocus, initialValue = '', onValueChange, style }) => {
  const [value, setValue] = useState<string>(initialValue);
  const textEditorRef = useRef<Editor>(null)

  useEffect(() => {
    if (textEditorRef.current && initialValue && autoFocus) {
      textEditorRef.current.focus();
    }
  }, [initialValue, autoFocus])

  useEffect(() => {
    if (!value) {
      setValue(initialValue)
    }
  }, [initialValue])

  const handleTextEditorChange = (value: string) => {
    setValue(value)
    onValueChange(value)
  }

  const textEditorControls = useMemo(() => {
    const defaultControls: ToolbarControl[][] = [
      ['bold', 'italic', 'underline', 'link'],
      ['unorderedList', 'codeBlock', 'h1', 'h2', 'h3'],
      ['sup', 'sub'],
      ['alignLeft', 'alignCenter', 'alignRight'],
    ]

    // Enable image upload event
    if (onImageUpload) {
      defaultControls[0].concat('image')
    }

    return defaultControls;
  }, [onImageUpload])

  return (
    <Wrapper style={style}>
      <RichTextEditor
        style={style}
        ref={textEditorRef}
        onChange={handleTextEditorChange}
        value={value}
        onImageUpload={onImageUpload}
        controls={textEditorControls}
      />
    </Wrapper>
  )
}

export default NotepadTextEditor;