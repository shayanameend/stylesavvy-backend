import * as zod from "zod"

export function formatZodErrors(error: zod.ZodError) {
  return error.errors.concat().map(item => `${item.path[0]}: ${item.message}`)
}

export function handleZodErrors(error: zod.ZodError, label?: string) {
  if (error instanceof zod.ZodError) {
    console.error(label ? `${label} Errors:` : "Errors:", formatZodErrors(error))

    process.exit(0)
  }

  console.error(JSON.stringify(error))

  process.exit(1)
}