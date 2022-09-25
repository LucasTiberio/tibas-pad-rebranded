import { iUser } from "../../types/user.interface";

export interface iUserContext {
  login: (login: string, password: string) => void;
  user?: iUser
  token?: string;
}