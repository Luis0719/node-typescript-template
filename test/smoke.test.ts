// Smoke test to check the server is healthy.

import server from "./common/testServer";
import { Response } from "supertest";

describe("Smoke test", () => {
  test("test server is healthy", async () => {
    const res: Response = await server.TestServer().get("/");
    expect(res.status).toBe(200);
  });
});
