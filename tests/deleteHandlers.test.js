// eslint-disable-next-line no-undef
const config = require("../config");

test("status should be 200", async () => {
  let actualStatus = null;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
    const data = await response.json();
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});

test('Test should show response body "ok:true"', async () => {
  let deleteResponse;
  let actualDeleteResponse;
  try {
    deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
    actualDeleteResponse = await deleteResponse.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualDeleteResponse).toEqual({ ok: true });
});
