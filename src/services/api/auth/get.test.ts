import MockAxios from "jest-mock-axios";
import { getUserInfo } from "./get";
import { USER_INFO } from "./routes";

describe("auth/get", () => {
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
});
