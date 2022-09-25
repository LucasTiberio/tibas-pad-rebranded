export interface iNotepadTextEditor {
  initialValue?: string;
  onValueChange: (value: string) => void;
  style?: React.CSSProperties;
  onImageUpload?: (image: File) => Promise<string>;
  autoFocus?: boolean;
}