
// Request Types
export interface OtpRequest {
    phone: string
}

export interface OtpVerificationRequest {
    phone: string,
    code: string
}

// Response Types
export interface OtpResponse {
    code: string
}

export interface OtpVerificationResponse {
    status: string
}
