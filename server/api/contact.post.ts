import { z } from 'zod'

const contactSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().max(2000)
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: result.error.format()
    })
  }

  const { firstname } = result.data

  // TODO: Implement GHL API integration in Plan 01-02
  // console.log('Contact form submission:', result.data)

  return {
    message: `Thank you for your message, ${firstname}! We will get back to you as soon as possible.`,
  }
})
