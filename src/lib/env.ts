import * as zod from "zod";
import {NODE_ENV} from "./types";
import * as process from "node:process";
import {formatZodErrors} from "./zod";

const envSchema = zod.object({
  NODE_ENV: zod.enum([NODE_ENV.DEVELOPMENT, NODE_ENV.TESTING, NODE_ENV.PRODUCTION]),
  HOST: zod.string().url(),
  PORT: zod.coerce.number().min(4).max(4),
})


const validatedEnv = envSchema.safeParse(process.env)

if (validatedEnv.error) {
  const error = validatedEnv.error

  if (error instanceof zod.ZodError) {
    console.error(formatZodErrors(error))

    process.exit(0)
  }

  console.error(JSON.stringify(error))

  process.exit(1)
}

export const env = validatedEnv.data
