import { get } from "http";
import { getEnv } from "../utils/get-inv";

export const Env = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "8000"),
  BASE_URL: getEnv("BASE_URL", "http://localhost:8000"),
  MONGO_URI: getEnv("MONGO_URI", ""),
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
};
