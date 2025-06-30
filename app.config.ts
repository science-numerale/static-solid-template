import { defineConfig } from "@solidjs/start/config";
import process from "node:process";

export default defineConfig({
  server: {
    baseURL: process.env.BASE_PATH,
    static: true,
    preset: "static",
  },
});
