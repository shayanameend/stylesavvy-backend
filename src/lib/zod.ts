import * as zod from "zod"

export function formatZodErrors(error: zod.ZodError) {
  // @ts-ignore
  return error.errors.concat().map(item => `Received ${JSON.stringify(item.received)}, instead of ${JSON.stringify(item.expected)} at ${item.path[0]}`)
}