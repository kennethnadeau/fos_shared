import Axios from "axios";
import { UserInfoResponse } from "./types";
import { USER_INFO } from "./routes";
import camelaseKeys from "camelcase-keys";

export const getUserInfo = (token: string) => Axios.get<{ data: UserInfoResponse }>(USER_INFO, {
  headers: {
    Authorization: `Token ${token}`
  }
}).then(data => ({
  ...data,
  data: camelaseKeys(data.data)
}));
