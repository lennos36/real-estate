import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '26aec0e4d7mshcbfb73b86ec0f50p1ed0e0jsn85e7f21b0b34'
  },
  });
    
  return data;
}