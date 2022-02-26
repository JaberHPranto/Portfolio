import sanityClient from "@sanity/client";
import imageUrIBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "n4y2uprn",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrIBuilder(client);
export const urlFor = (source) => builder.image(source);
