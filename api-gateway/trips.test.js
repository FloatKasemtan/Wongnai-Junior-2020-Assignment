const request = require("supertest");
const app = require("./app.js");

describe("Test trips API", () => {
  test("It should response status 200", async () => {
    const response = await request(app).get("/trips");
    expect(response.statusCode).toBe(200);
  });
  test("It should response status 200", async () => {
    const response = await request(app).get("/trips?keyword=");
    expect(response.statusCode).toBe(200);
  });
  test("It should response status 200", async () => {
    const response = await request(app).get("/trips?keyword=Hakone");
    console.log(response.data);
    expect(response.statusCode).toBe(200);
  });
  test("It should response status 404", async () => {
    const response = await request(app).get("/trips?keyword=abcdefg");
    expect(response.statusCode).toBe(404);
  });

  test("It should response status 404", async () => {
    const response = await request(app).get("/trips?keyword=1230");
    expect(response.statusCode).toBe(404);
  });
});
