import { PortableTextProps } from "@portabletext/react";

interface Slug {
  current: string;
}

type Body = PortableTextProps["value"];

export interface Post {
  _id?: string;
  slug?: Slug;
  title?: string;
  body?: Body;
  bodyPreview?: string;
  publishedAt?: string;
  mainImage?: string;
  category?: string;
  author?: string;
  file?: {
    url: string;
    name: string;
  };
}

export interface DonationForm {
  url: string;
}
