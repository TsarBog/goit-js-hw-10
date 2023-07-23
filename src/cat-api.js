import axios from 'axios';

const API_KEY = 'live_bFVAcrXQuBujkFwS4Wd81Lpk8lEAXstKNXeEYC4PAl6jPzU6tuEfX2YGxsaulYsM'

axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

async function fetchBreeds() {
  const END_POINT = '/breeds';

  const response = await axios.get(`${END_POINT}`);
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.data;
}

async function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search';

  const response = await axios
        .get(`${END_POINT}?breed_ids=${breedId}`);
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = response.data;
    if (data.length === 0) {
        throw new Error('No cat found for the selected breed');
    }
    return data[0];
}

export { fetchBreeds, fetchCatByBreed };