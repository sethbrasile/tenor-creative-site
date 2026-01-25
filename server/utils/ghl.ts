import { ofetch } from 'ofetch'

export const ghlFetch = ofetch.create({
  baseURL: 'https://services.cloud.msgndr.com/generic',
  headers: {
    Version: '2021-04-15'
  },
  async onRequest({ options }) {
    const config = useRuntimeConfig()
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${config.ghlApiKey}`
    }
  }
})
