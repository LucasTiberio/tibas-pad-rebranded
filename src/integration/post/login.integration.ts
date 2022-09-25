import axiosClient from "../axiosInstance"

const loginIntegration = async (login: string, password: string) => {
  const url = `/api/auth`
  const body = {
    login,
    password
  }

  const { data } = await axiosClient.post(`${url}`, body);
  const { token, username } = data
  return {
    success: !!token && !!username,
    username,
    token
  }
}

export default loginIntegration;