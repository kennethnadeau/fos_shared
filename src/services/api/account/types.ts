export interface AccountRegistrationRequest {
  phone: string
  firstName: string
  lastName: string
  email: string
  registrationUuid: string
}

export interface UserInfoResponse {
  id: string
  firstName: string
  lastName: string
  email: string
  dateJoined: string
  phone: string
  photo: string | null
  nickname: string | null
  dateOfBirth: string | null
}
