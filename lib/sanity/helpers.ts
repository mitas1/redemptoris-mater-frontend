import { SANITY_CONFIG } from "./config";

const FRAGMENT_FIELDS = `
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  bodyPreview,
  'author': author->name
`;

const ALL_FIELDS = `
  ${FRAGMENT_FIELDS},
  body,
  'author': author->name,
  'file': {
    'url': file.asset->url,
    'title': file.title
  },
`;

export const buildPostQuery = ({
  isDraft,
  slug,
  type = "article",
  isFragment,
  from = 0,
  to,
}: {
  isDraft?: boolean;
  slug?: string;
  type?: string;
  isFragment?: boolean;
  from?: number;
  to?: number;
}) => `
*[_type == "${type}" ${isDraft ? '&& _id in path("drafts.**")' : ""} ${
  slug ? `&& slug.current == "${slug}"` : ""
}]{
  ${isFragment ? FRAGMENT_FIELDS : ALL_FIELDS}
} ${SANITY_CONFIG.orderBy} [${from}${
  typeof to !== "undefined" ? `..${to}` : ""
}]
`;
