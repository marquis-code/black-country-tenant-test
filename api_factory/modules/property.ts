import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_V2 } from "../axios.config";

export const property_api = {
$_fetch_properties: (page = 1, perPage = 20, searchQuery = '') => {
  let url = `/houses?page=${page}&perPage=${perPage}&status=published`
  
  // Add search query to the URL if provided
  if (searchQuery) {
      url += `&search=${searchQuery}`
  }

  return GATEWAY_ENDPOINT.get(url)
},

  $_fetch_single_property: (id: any) => {
    const url = `/houses/${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_fetch_similar_properties: (id: any) => {
    const url = `/houses/${id}/similar`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_bookmark_listing: (payload: any) => {
    const url = '/bookmarked-houses';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_fetch_bookmarked_listings: () => {
    const url = '/bookmarked-houses';
    return GATEWAY_ENDPOINT.get(url);
  },
  $_filter_listings: (payload: any) => {
    const url = '/houses/search';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_fetch_property_types: () => {
    const url = "/house-types";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_fetch_common_areas: () => {
    const url = "/common-areas";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_save_search: (payload: any) => {
    const url = '/saved-searches';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_fetch_saved_search: (page = 1, perPage = 20) => {
    let url = `/saved-searches?page=${page}&perPage=${perPage}`
    return GATEWAY_ENDPOINT.get(url)
  },
  $_delete_saved_search: (id: string | any) => {
    let url = `/saved-searches/${id}`
    return GATEWAY_ENDPOINT.delete(url)
  },
  $_clear_saved_search: (payload: any) => {
    let url = '/saved-searches/clear'
    return GATEWAY_ENDPOINT.delete(url, payload)
  },
  
};
