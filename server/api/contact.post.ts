import { z } from 'zod'

const contactSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().max(2000)
})

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (data) => contactSchema.safeParse(data))
  
  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: result.error.format()
    })
  }

  const { firstname, lastname, email, phone } = result.data

  try {
    // Post to GHL v2 Create/Update Contact endpoint
    await ghlFetch('/contacts/', {
      method: 'POST',
      body: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phone,
        tags: ['website-lead'],
        source: 'Website Contact Form'
      }
    })

    return {
      success: true,
      message: `Thank you for your message, ${firstname}! We will get back to you as soon as possible.`,
    }
  } catch (error: any) {
    const statusCode = error.statusCode || 500
    const statusMessage = error.statusMessage || 'Internal Server Error'
    
    console.error('GHL API Error:', {
      statusCode,
      statusMessage,
      data: error.data
    })

    throw createError({
      statusCode,
      statusMessage,
      message: 'Failed to process contact submission. Please try again later.'
    })
  }
})
