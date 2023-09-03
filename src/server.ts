import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";

const app: Application = express();
const port = 8080; // default port to listen

function BuildApp(): Application {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cookieParser());

  app.use(helmet());

  // define a route handler for the default home page
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
  });

  // Export the app so it can be reused by tests.
  return app;
}

function StartServer(): void {
  BuildApp();

  // start the Express server
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

export default { StartServer, BuildApp };
