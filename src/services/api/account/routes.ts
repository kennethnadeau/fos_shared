import Axios from "axios";
import camelaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";

import { handleApiResponse } from "../helpers/handleApiResponse";
import { ACCOUNT_REGISTRATION, USER_INFO } from "./constants";
import { AccountRegistrationRequest, UserInfoResponse } from "./types";

export const getUserInfo = async (token: string) => {
  const response = await Axios.get<{ data: UserInfoResponse }>(USER_INFO, {
    headers: {
      Authorization: `Token ${token}`
    }
  });
  const { data } = handleApiResponse(response);

  if (!data) return {};

  return {
    data: camelaseKeys(data)
  };
};

export const postAccountRegistration = async (data: AccountRegistrationRequest) => {
  const response = await Axios.post(ACCOUNT_REGISTRATION, snakeCaseKeys(data));
  return handleApiResponse(response);
};
