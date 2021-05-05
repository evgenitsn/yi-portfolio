import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllEntriesByContentType(contentType: string) {
  const apiResponse = await client.getEntries({ content_type: contentType });
  return apiResponse.items.map(e => e.fields);
}
