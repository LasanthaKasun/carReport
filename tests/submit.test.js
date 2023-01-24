import { createMocks, RequestMethod } from "node-mocks-http";
import submit from "../src/pages/api/submit";

describe("/api/submit", () => {
  test("returns a message with the specified damage report submit", async () => {
    const dataSet = {
      brand: "",
      model: "",
      number: "",
      uuid: "",
      name: "",
      email: "",
      mobile: "",
      description: "",
      imgPath: "",
      date: "",
    };
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(dataSet),
    });

    await submit(req, res);

    expect(res._getStatusCode()).toBe(201);
  });
});

describe("/api/submit", () => {
  test("returns a message with wrong request method", async () => {
    const dataSet = {
      brand: "",
      model: "",
      number: "",
      uuid: "",
      name: "",
      email: "",
      mobile: "",
      description: "",
      imgPath: "",
      date: "",
    };
    const { req, res } = createMocks({
      method: "GET",
      body: JSON.stringify(dataSet),
    });

    await submit(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
