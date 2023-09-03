import express, { Application } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

function Register(app: Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cookieParser());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cors());
  app.use(helmet());
}

export default { Register };
