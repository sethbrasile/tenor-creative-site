import { Client } from '@hubspot/api-client'

export default defineEventHandler(async (event) => {
  const { HUBSPOT_API_KEY } = useRuntimeConfig();
  if (!HUBSPOT_API_KEY) throw new Error('HUBSPOT_API_KEY is undefined!! Please provide HUBSPOT_API_KEY to environment!')

  const hubspot = new Client({ accessToken: HUBSPOT_API_KEY });
  const { firstname, lastname, email, phone, message } = await readBody(event);

  // TODO: Add validation and error handling via sentry

  try {
    await hubspot.crm.contacts.basicApi.create({
      properties: {
        firstname,
        lastname,
        email,
        message,
        phone,
      },
    })
  } catch (error) {
    const err = error as { code: number };
    if (err.code === 409) {
      // get the contact ID from hubspot
      const response = await hubspot.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [
            {
              propertyName: 'email',
              // @ts-expect-error typed incorrectly
              operator: 'EQ',
              value: email,
            },
          ],
        }],
        // @ts-expect-error typed incorrectly
        sorts: [{
          propertyName: 'createdate',
          direction: 'DESCENDING',
        }],
        limit: 1,
        properties: ['id', 'message'],
      });
      // TODO: Need some kind of notification for this case
      // contact already exists so add new content to contact's message instead of creating a new contact
      const contact = response.results[0]
      await hubspot.crm.contacts.basicApi.update(contact.id, {
        properties: {
          message: `${contact.properties.message}\n\n${message}`,
        },
      })
    } else {
      throw error
    }
  }

  return {
    message: `Thank you for your message, ${firstname}! We will get back to you as soon as possible.`,
  };
})
