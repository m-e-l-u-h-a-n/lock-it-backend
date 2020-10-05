import { merge } from "lodash";
const env = process.env.NODE_ENV || "development";
const baseConfig = {
  env,
  isDev: env === "development",
  port: process.env.port || 3000,
};

let envConfig = {};

if(env === "dev" || env === "development") {
  envConfig = require('./dev').config;
} else if (env === "prod" || env === "production" || env === "Prod" || env === "Production") {
  envConfig = require("./production").config;
} else {
  envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);