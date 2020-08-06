import { apiService } from ".";

describe("apiService exports", () => {
  it("should find account functions", async () => {
    const { account } = apiService;
    expect(account).toBeDefined();
    expect(account.getUserInfo).toBeDefined();
  });

  it("should find auth functions", async () => {
    const { otp } = apiService;
    expect(otp).toBeDefined();
  });
});
