
// Request Types
export interface OtpRequest {
    phone: string
}

export interface OtpVerificationRequest {
    phone: string
    code: string
}

// Response Types

export interface OtpRegVerificationResponse {
    uuid: string
}

export interface OtpAuthVerificationResponse {
    token: string
}
