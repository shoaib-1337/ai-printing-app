import { get } from "http";
import { getEnv } from "../utils/get-inv";

export const Env = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "8000"),
  BASE_URL: getEnv("BASE_URL", "http://localhost:8000"),
  MONGO_URI: getEnv("MONGO_URI", "XYZ"),
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
  BETTER_AUTH_SECRET: getEnv("BETTER_AUTH_SECRECT"),
  BETTER_AUTH_URL: getEnv("BETTER_AUTH_UTL"),
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
};
