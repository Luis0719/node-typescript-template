import { jest } from "@jest/globals";
import TestServer from "./common/testServer.js";
import { Server } from "http";

// The Http server used by the app.
let httpServer: Server;
const port = 8080;

beforeAll((done) => {
  console.log("Starting test setup.");
  httpServer = TestServer.app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    done();
  });
});

afterAll((done) => {
  console.log("Stopping test server");
  httpServer.close(done);
});
