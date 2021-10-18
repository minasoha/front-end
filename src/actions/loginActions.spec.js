import * as loginActions from "./loginActions";

describe("Standard actions", () => {
  it("each return object containing type property", () => {
    const loginInitReturn = loginActions.loginInit();
    const loginSuccessReturn = loginActions.loginSuccess();
    const loginFailureReturn = loginActions.loginFailure();

    expect(loginInitReturn).toHaveProperty("type");
    expect(loginSuccessReturn).toHaveProperty("type");
    expect(loginFailureReturn).toHaveProperty("type");
  });
});

describe("Login Attempt", () => {
  it("can return a login token when invoked using a valid API", async () => {
    loginActions.attemptLogin = jest.fn().mockResolvedValueOnce({
      data: {
        token:
          "ahuBHejkJJiMDhmcit4nslb7rLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
      },
    });
    const mockAuthData = await loginActions.attemptLogin();
    expect(mockAuthData.data).toHaveProperty("token");
  });
});
