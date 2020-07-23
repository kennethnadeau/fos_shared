import Axios from 'axios'
import { OtpRequest, OtpResponse, OtpVerificationRequest, OtpVerificationResponse } from './types'
import { OTP_REGISTRATION, OTP_REGISTRATION_VERIFY, OTP_AUTHENTICATE, OTP_AUTHENTICATE_VERIFY, OTP_LOGOUT } from './routes'

export const postOtpRegistration = (data: OtpRequest) => Axios.post<OtpResponse>(OTP_REGISTRATION, data)
export const postOtpRegistrationVerify = (data: OtpVerificationRequest) => Axios.post<OtpVerificationResponse>(OTP_REGISTRATION_VERIFY, data)

export const postOtpAuthenticate = (data: OtpRequest) => Axios.post<OtpResponse>(OTP_AUTHENTICATE, data)
export const postOtpAuthenticateVerify = (data: OtpVerificationRequest) => Axios.post<OtpVerificationResponse>(OTP_AUTHENTICATE_VERIFY, data)

export const postLogout = () => Axios.post(OTP_LOGOUT)
