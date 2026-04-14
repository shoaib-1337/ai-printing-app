import "dotenv/config";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import { HTTPSTATUS } from "./config/http.config";
import cors from "cors";
import { Env } from "./config/env.config";
import { env } from "process";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [Env.FRONTEND_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/health", (req: Request, res: Response) => {
  res
    .status(HTTPSTATUS.OK)
    .json({ message: "Server is healthy", status: "OK" });
});

app.use(errorHandler);

app.listen(Env.PORT, async () => {
  console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
