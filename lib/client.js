import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// połączenie z sanity

export const client = sanityClient({
    projectId: 'pairml8q',
    dataset: 'production',
    apiVersion: '2023-01-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);