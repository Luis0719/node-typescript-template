import server from "../../src/server.js";
import { Application } from "express";
import supertest, { SuperTest } from "supertest";

const app: Application = server.BuildApp();
/**
 * Get fake http service
 */
function TestServer(): SuperTest<supertest.Test> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return supertest(app);
}

export default { app, TestServer };
