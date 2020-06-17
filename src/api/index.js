import axios from 'axios';
import { API } from '../utils/url';

const fetchImages = async page => {
  const response = await axios.get(`${API}&per_page=10&page=${page}`);

  console.log('response ', response);
  if (response.status >= 400) {
    throw new Error(response.errors);
  }
  return response.data;
};

export { fetchImages };
