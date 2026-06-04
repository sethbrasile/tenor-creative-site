import { z } from 'zod';

/**
 * Shared contact-form validation — imported by the ContactForm island (client)
 * and the /functions/api/contact.ts Pages Function (server, Phase 4) so client
 * and server validation never drift.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.').max(100),
  email: z.email('Enter a valid email address.').max(200),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Tell me a bit more — 10 characters or more.')
    .max(2000, 'Message is too long (2000 characters max).'),
});

export type ContactInput = z.infer<typeof contactSchema>;
