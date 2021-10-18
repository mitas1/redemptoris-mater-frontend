import {
  sanityClient,
  sanityPreviewClient,
} from "./client";
import { SANITY_CONFIG } from "./config";
import { buildPostQuery } from "./helpers";
import {
  DonationForm,
  Post,
} from "./types";

export const createSanityApi = (preview = false) => {
  const client = preview ? sanityPreviewClient : sanityClient;

  return {
    async getPost({
      slug,
      isDraft,
      type,
    }: {
      slug?: string;
      isDraft?: boolean;
      type?: string;
    }): Promise<Post> {
      const query = buildPostQuery({ isDraft, slug, type });
      console.log(query);
      return client.fetch(query);
    },
    async getPosts(
      from = 0,
      to = SANITY_CONFIG.postsPerPage - 1
    ): Promise<Post[]> {
      const query = buildPostQuery({ from, to, isFragment: true });
      console.log(query);
      return client.fetch(query);
    },
    async getPostsCount() {
      console.log("get");
      return client.fetch(`
            count(*[_type == "article"])
        `);
    },
    async getDonationForm(): Promise<DonationForm> {
      return client.fetch(`
        *[_type == 'settings'][0] {
          "url": donationForm.asset->url
        }
      `);
    },
  };
};
