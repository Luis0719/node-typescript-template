import { Application, Request, Response } from "express";

function SetupRoutes(app: Application): void {
  // define a route handler for the default home page
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
  });
}

export default { SetupRoutes };
