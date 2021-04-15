import imageUrlBuilder from '@sanity/image-url';

import sanity from '../lib/sanity';

const builder = imageUrlBuilder(sanity)

export const urlFor = (source) => builder.image(source)
