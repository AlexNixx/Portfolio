import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "i5jqrc0x",
	dataset: "production",
	apiVersion: "2022-06-26",
	useCdn: true,
	ignoreBrowserTokenWarning: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);