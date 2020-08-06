import MockAxios from "jest-mock-axios";
import snakeCaseKeys from "snakecase-keys";

import { ACCOUNT_REGISTRATION, USER_INFO } from "./constants";
import { getUserInfo, postAccountRegistration } from "./routes";
import { AccountRegistrationRequest } from "./types";

describe("account/routes", () => {
  afterEach(() => MockAxios.reset());

  describe("userInfo", () => {
    it("should fetch user info", () => {
      const thenFn = jest.fn();
      const catchFn = jest.fn();

      getUserInfo("tokenHere").then(thenFn).catch(catchFn);

      expect(MockAxios.get).toHaveBeenCalledWith(USER_INFO, {
        headers: {
          Authorization: "Token tokenHere"
        }
      });
    });

    it("should return camelcase", async () => {
      const promise = getUserInfo(USER_INFO);

      const responseObj = {
        data: { first_name: "Joy" },
        status: 200
      };
      MockAxios.mockResponse(responseObj);

      const result = await promise;

      expect(result).toEqual({ data: { firstName: "Joy" } });
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
