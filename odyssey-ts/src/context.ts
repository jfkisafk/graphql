import { ListingApi } from "./datasources/listing-api";

export type DataSourceContext = {
  datasources: {
    listingApi: ListingApi;
  };
};
