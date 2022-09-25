import { iNotepad } from "../../types/notepad.interface";
import axiosClient from "../axiosInstance"

const getNotepadDetails = async (name: string, protection?: string) => {
  const url = `/api/tibaspad/${name}`
  const protectionParam = protection ? `?protection=${protection}` : ''
  const { data } = await axiosClient.get(`${url}${protectionParam}`).then(result => result);

  if (data.notepad) return data.notepad as iNotepad;
  return undefined;
}

export default getNotepadDetails;