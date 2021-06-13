import { create } from 'apisauce';

const geoApi = create({
  baseURL: 'https://discover.search.hereapi.com/v1'
})

const getSuggestions = (query) => geoApi.get(`/discover?at=52.5228,13.4124&q=${query}&apiKey=gI7fBvw9dx_qoP0Esleo2h73mhJqLqXF19qiVw71ClI`);

export default {getSuggestions};