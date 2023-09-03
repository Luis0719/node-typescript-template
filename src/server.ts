import express, { Application } from "express";
import middlewares from "./middlewares";
import routes from "./app/routes";

const app: Application = express();
const port = 8080; // default port to listen

function BuildApp(): Application {
  middlewares.Register(app);
  routes.SetupRoutes(app);

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
