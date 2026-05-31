import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const sitemapClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always fetch fresh data
})