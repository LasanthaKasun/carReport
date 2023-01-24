import { createMocks, RequestMethod } from "node-mocks-http";
import read from "../src/pages/api/read";

describe("/api/read", () => {
  test("returns a message with the specified damage report", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    await read(req, res);

    expect(res._getStatusCode()).toBe(201);
  });
});

describe("/api/read", () => {
  test("returns a message with wrong request method", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await read(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});