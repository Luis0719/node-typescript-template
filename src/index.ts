import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
const app = express();
const port = 8080; // default port to listen

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cookieParser());

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
