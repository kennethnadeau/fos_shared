import Axios from 'axios'
import snakeCaseKeys from 'snakecase-keys'
import { handleApiResponse } from '../helpers/handleApiResponse'
import {
  OtpRequest,
  OtpVerificationRequest,
  OtpRegVerificationResponse,
  AccountRegistrationRequest,
  OtpAuthVerificationResponse
} from './types'
import {
  OTP_REGISTRATION,
  OTP_REGISTRATION_VERIFY,
  OTP_AUTHENTICATE,
  OTP_AUTHENTICATE_VERIFY,
  OTP_LOGOUT, ACCOUNT_REGISTRATION
} from './routes'

export const postOtpRegistration = async (data: OtpRequest) => {
  const response = await Axios.post<void>(OTP_REGISTRATION, data)
  return handleApiResponse(response)
}

export const postOtpRegistrationVerify = async (data: OtpVerificationRequest) => {
  const response = await Axios.post<{ data: OtpRegVerificationResponse }>(OTP_REGISTRATION_VERIFY, data)
  return handleApiResponse(response)
}

export const postOtpAuthenticate = async (data: OtpRequest) => {
  const response = await Axios.post<void>(OTP_AUTHENTICATE, data)
  return handleApiResponse(response)
}

export const postOtpAuthenticateVerify = async (data: OtpVerificationRequest) => {
  const response = await Axios.post<{ data: OtpAuthVerificationResponse }>(OTP_AUTHENTICATE_VERIFY, data)
  return handleApiResponse(response)
}

export const postAccountRegistration = async (data: AccountRegistrationRequest) => {
  const response = await Axios.post(ACCOUNT_REGISTRATION, snakeCaseKeys(data))
  return handleApiResponse(response)
}

export const postLogout = async () => {
  const response = await Axios.post(OTP_LOGOUT)
  return handleApiResponse(response)
}
