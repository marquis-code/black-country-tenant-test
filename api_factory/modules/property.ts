import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_V2 } from "../axios.config";

export const property_api = {
$_fetch_properties: (page = 1, perPage = 20, searchQuery = '') => {
  let url = `/houses?page=${page}&perPage=${perPage}&isPublished=true`
  
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
  }
};