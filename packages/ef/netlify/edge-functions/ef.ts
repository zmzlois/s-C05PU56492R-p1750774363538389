import { sum } from 'dep'
import type { Config } from '@netlify/edge-functions'

export default async function() {
  return Response.json(sum(1, 2))
}

export const config: Config = {
  path: '/*'
}