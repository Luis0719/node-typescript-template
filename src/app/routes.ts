import { Application } from "express";
import home from "./services/home.js";

function SetupRoutes(app: Application): void {
  home.SetupRoutes(app);
}

export default { SetupRoutes };
