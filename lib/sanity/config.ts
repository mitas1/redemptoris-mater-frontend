export const SANITY_CONFIG = {
  apiVersion: "2021-08-31",
  orderBy: " | order(publishedAt desc) ",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  secretToken: process.env.SANITY_SECRET_TOKEN,
  previewUrl: process.env.PREVIEW_URL_SECRET || "secret",
  postsPerPage: 10,
};
