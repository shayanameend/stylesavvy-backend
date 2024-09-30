import {env} from "./lib/env";
import {NODE_ENV} from "./lib/types";

console.log(`${env.NODE_ENV === NODE_ENV.PRODUCTION ? "https" : "http"}://${env.HOST}:${env.PORT}`)