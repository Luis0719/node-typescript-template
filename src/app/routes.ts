import { Application } from "express";
import home from "./services/home";

function SetupRoutes(app: Application): void {
  home.SetupRoutes(app);
}

export default { SetupRoutes };
