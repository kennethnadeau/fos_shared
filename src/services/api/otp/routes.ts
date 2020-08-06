import Axios from "axios";
import { handleApiResponse } from "../helpers/handleApiResponse";

import * as OTP from "./constants";
import {
  OtpRequest,
  OtpVerificationRequest,
  OtpRegVerificationResponse,
  OtpAuthVerificationResponse
} from "./types";

export const postOtpRegistration = async (data: OtpRequest) => {
  const response = await Axios.post<void>(OTP.OTP_REGISTRATION, data);
  return handleApiResponse(response);
};

export const postOtpRegistrationVerify = async (data: OtpVerificationRequest) => {
  const response = await Axios.post<{ data: OtpRegVerificationResponse }>(OTP.OTP_REGISTRATION_VERIFY, data);
  return handleApiResponse(response);
};

export const postOtpAuthenticate = async (data: OtpRequest) => {
  const response = await Axios.post<void>(OTP.OTP_AUTHENTICATE, data);
  return handleApiResponse(response);
};

export const postOtpAuthenticateVerify = async (data: OtpVerificationRequest) => {
  const response = await Axios.post<{ data: OtpAuthVerificationResponse }>(OTP.OTP_AUTHENTICATE_VERIFY, data);
  return handleApiResponse(response);
};

export const postLogout = async () => {
  const response = await Axios.post(OTP.OTP_LOGOUT);
  return handleApiResponse(response);
};
