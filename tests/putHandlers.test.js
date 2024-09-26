// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  productsList: [
    {
      id: 6,
      quantity: 3,
    },
  ],
  name: "string",
};

test("Should receive 200 ok true....", async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

test("Response body should contain....", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody.ok).toBeTruthy();
});
