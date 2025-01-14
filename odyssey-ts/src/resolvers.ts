import { validateFullAmenities } from "./helpers";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { datasources }) =>
      datasources.listingApi.getFeaturedListings(),
    listing: (_, { id }, { datasources }) =>
      datasources.listingApi.getListing(id),
  },
  Listing: {
    amenities: ({ id, amenities }, _, { datasources }) =>
      validateFullAmenities(amenities)
        ? amenities
        : datasources.listingApi.getAmenities(id),
  },
  Mutation: {
    createListing: async (_, { input }, { datasources }) => {
      try {
        const res = await datasources.listingApi.createListing(input);
        return {
          code: 200,
          success: true,
          message: "Listing created successfully!",
          listing: res,
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err.extensions.response.body}`,
          listing: null,
        };
      }
    },
  },
};
