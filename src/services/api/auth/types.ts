
// Request Types
export interface OtpRequest {
    phone: string
}

export interface OtpVerificationRequest {
    phone: string
    code: string
}

export interface AccountRegistrationRequest {
    phone: string
    firstName: string
    lastName: string
    email: string
    registrationUuid: string
}

// Response Types

export interface OtpRegVerificationResponse {
    uuid: string
}

export interface OtpAuthVerificationResponse {
    token: string
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
