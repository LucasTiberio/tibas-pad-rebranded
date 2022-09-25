import axiosClient from "../axiosInstance"

const updateNotepadContentIntegration = async (name: string, content: string, protection?: string): Promise<boolean> => {
  const url = `/api/tibaspad/${name}`
  const body = {
    content,
    protection,
  }

  const { data } = await axiosClient.post(`${url}`, body);
  if (data.notepad) return true
  
  return false
}

export default updateNotepadContentIntegration;