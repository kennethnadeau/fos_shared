import Axios from "axios";
import camelaseKeys from "camelcase-keys";

import { handleApiResponse } from "../helpers/handleApiResponse";
import { USER_INFO } from "./routes";
import { UserInfoResponse } from "./types";

export const getUserInfo = async (token: string) => {
  const response = await Axios.get<{ data: UserInfoResponse }>(USER_INFO, {
    headers: {
      Authorization: `Token ${token}`
    }
  });
  const data = handleApiResponse(response);
  return {
    ...data,
    data: camelaseKeys(data)
  };
};
