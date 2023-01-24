import { createMocks, RequestMethod } from "node-mocks-http";
import current from "../src/pages/api/current";

describe("/api/read", () => {
  test("returns a message with the specified damage report parsing uuid", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        uuid: '4kk2595kfgle',
      },
    });

    await current(req, res);

    expect(res._getStatusCode()).toBe(201);
  });
});

describe("/api/read", () => {
  test("returns a message with wrong request method", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        uuid: '4kk2595kfgle',
      },
    });

    await current(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
