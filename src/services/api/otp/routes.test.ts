import MockAxios from "jest-mock-axios";

import * as OTP from "./constants";
import {
  postOtpRegistration,
  postOtpRegistrationVerify,
  postOtpAuthenticate,
  postOtpAuthenticateVerify,
  postLogout
} from "./routes";
import {
  OtpRequest,
  OtpVerificationRequest
} from "./types";

describe("otp/routes", () => {
  afterEach(() => MockAxios.reset());

  describe("OTP", () => {
    describe("registration", () => {
      it("should send request for OTP registration", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData:OtpRequest = {
          phone: "123456789"
        };

        postOtpRegistration(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP.OTP_REGISTRATION, fakeData);
      });

      it("should send OTP verification request", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData: OtpVerificationRequest = {
          code: "foobar",
          phone: "123456789"
        };

        postOtpRegistrationVerify(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP.OTP_REGISTRATION_VERIFY, fakeData);
      });
    });
    describe("authentication", () => {
      it("should send request for OTP authentication", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData: OtpRequest = {
          phone: "123456789"
        };

        postOtpAuthenticate(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP.OTP_AUTHENTICATE, fakeData);
      });

      it("should send OTP verification request", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData: OtpVerificationRequest = {
          code: "foobar",
          phone: "123456789"
        };

        postOtpAuthenticateVerify(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP.OTP_AUTHENTICATE_VERIFY, fakeData);
      });
    });

    it("should send logout request", () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();

      postLogout().then(thenFn).catch(catchFn);

      expect(MockAxios.post).toHaveBeenCalledWith(OTP.OTP_LOGOUT);
    });
  });
});
