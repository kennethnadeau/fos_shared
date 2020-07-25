
// Request Types
export interface OtpRequest {
    phone: string
}

export interface OtpVerificationRequest {
    phone: string,
    code: string
}

export interface AccountRegistrationRequest {
    phone: string,
    firstName: string,
    lastName: string,
    email: string,
    registrationUuid: string
}

// Response Types

export interface OtpVerificationResponse {
    status: string
}