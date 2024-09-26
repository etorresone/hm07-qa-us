// eslint-disable-next-line no-undef
const config = require("../config");

test("Should return 200 status code warehouses....", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

test("Should return 200 status code kit1....", async () => {
  let actualRespnseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualRespnseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualRespnseBody.name).toBe("For picnic");
});
