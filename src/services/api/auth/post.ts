import Axios from "axios";
import {
  OtpRequest,
  OtpVerificationRequest,
  OtpRegVerificationResponse,
  AccountRegistrationRequest,
  OtpAuthVerificationResponse
} from "./types";
import {
  OTP_REGISTRATION,
  OTP_REGISTRATION_VERIFY,
  OTP_AUTHENTICATE,
  OTP_AUTHENTICATE_VERIFY,
  OTP_LOGOUT, ACCOUNT_REGISTRATION
} from "./routes";
import snakeCaseKeys from "snakecase-keys";

export const postOtpRegistration = (data: OtpRequest) =>
  Axios.post<void>(OTP_REGISTRATION, data);

export const postOtpRegistrationVerify = (data: OtpVerificationRequest) =>
  Axios.post<{ data: OtpRegVerificationResponse }>(OTP_REGISTRATION_VERIFY, data);

export const postOtpAuthenticate = (data: OtpRequest) =>
  Axios.post<void>(OTP_AUTHENTICATE, data);

export const postOtpAuthenticateVerify = (data: OtpVerificationRequest) =>
  Axios.post<{ data: OtpAuthVerificationResponse }>(OTP_AUTHENTICATE_VERIFY, data);

export const postAccountRegistration = (data: AccountRegistrationRequest) =>
  Axios.post(ACCOUNT_REGISTRATION, snakeCaseKeys(data));

export const postLogout = () => Axios.post(OTP_LOGOUT);
