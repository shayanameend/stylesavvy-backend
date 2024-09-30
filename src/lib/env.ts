import * as process from 'node:process';
import * as zod from 'zod';
import { NODE_ENV } from './types';
import { handleZodErrors } from './zod';

const envSchema = zod.object({
  NODE_ENV: zod.enum([
    NODE_ENV.DEVELOPMENT,
    NODE_ENV.TESTING,
    NODE_ENV.PRODUCTION,
  ]),
  HOST: zod.string(),
  PORT: zod.coerce.number().min(1000).max(999999),
});

const validatedEnv = envSchema.safeParse(process.env);

if (validatedEnv.error) {
  handleZodErrors(validatedEnv.error, 'Env');
}

export const env = validatedEnv.data;
