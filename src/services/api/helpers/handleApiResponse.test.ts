import { handleApiResponse } from "./handleApiResponse";

describe("handleApiResponse", () => {
  const responseHeaders = {
    statusText: "",
    headers: {},
    config: {}
  };

  it("should return a valid response with data", () => {
    const response = handleApiResponse({ ...responseHeaders, status: 200, data: { data: "data" } });
    expect(response.data).toEqual("data");
  });

  it("should return a response with an error", () => {
    const response = handleApiResponse({ ...responseHeaders, status: 500, data: { data: "data" } });
    expect(response.data).toBeUndefined();
    expect(response.error).toEqual({});
  });
});
