import TestServer from "./common/testServer";
import { Server } from "http";

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
