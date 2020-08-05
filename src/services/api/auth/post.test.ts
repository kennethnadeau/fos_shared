import MockAxios from "jest-mock-axios";
import {
  ACCOUNT_REGISTRATION,
  OTP_REGISTRATION,
  OTP_REGISTRATION_VERIFY,
  OTP_AUTHENTICATE,
  OTP_AUTHENTICATE_VERIFY,
  OTP_LOGOUT
} from "./routes";
import {
  postOtpRegistration,
  postOtpRegistrationVerify,
  postOtpAuthenticate,
  postOtpAuthenticateVerify,
  postLogout,
  postAccountRegistration
} from "./post";
import {
  AccountRegistrationRequest,
  OtpRequest,
  OtpVerificationRequest
} from "./types";
import snakeCaseKeys from "snakecase-keys";

describe("auth/post", () => {
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

        expect(MockAxios.post).toHaveBeenCalledWith(OTP_REGISTRATION, fakeData);
      });

      it("should send OTP verification request", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData: OtpVerificationRequest = {
          code: "foobar",
          phone: "123456789"
        };

        postOtpRegistrationVerify(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP_REGISTRATION_VERIFY, fakeData);
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

        expect(MockAxios.post).toHaveBeenCalledWith(OTP_AUTHENTICATE, fakeData);
      });

      it("should send OTP verification request", () => {
        const thenFn = jest.fn();
        const catchFn = jest.fn();
        const fakeData: OtpVerificationRequest = {
          code: "foobar",
          phone: "123456789"
        };

        postOtpAuthenticateVerify(fakeData).then(thenFn).catch(catchFn);

        expect(MockAxios.post).toHaveBeenCalledWith(OTP_AUTHENTICATE_VERIFY, fakeData);
      });
    });

    it("should send logout request", () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();

      postLogout().then(thenFn).catch(catchFn);

      expect(MockAxios.post).toHaveBeenCalledWith(OTP_LOGOUT);
    });
  });

  describe("account", () => {
    it("should send account registration request", () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();

      const fakePayload: AccountRegistrationRequest = {
        email: "foo@email.com",
        firstName: "Foo",
        lastName: "Bar",
        phone: "123456789",
        registrationUuid: "someSuperSecureUuid"
      };

      postAccountRegistration(fakePayload).then(thenFn).catch(catchFn);

      expect(MockAxios.post).toHaveBeenCalledWith(ACCOUNT_REGISTRATION, snakeCaseKeys(fakePayload));
    });
  });

  describe("errors", () => {
    it("should return an error for the account registration request", async () => {
      const fakePayload: AccountRegistrationRequest = {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        registrationUuid: ""
      };
      const promise = postAccountRegistration(fakePayload);

      const responseObj = { data: null, status: 500 };
      MockAxios.mockResponse(responseObj);

      const result = await promise;

      expect(result).toEqual({ error: {} });
    });
  });
});
