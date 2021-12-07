import axios from 'axios';
import {OPEN_WEATHER} from '@env';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org',
});

export const getCurrentClimate = async (lat: string, lon: string) => {
  try {
    const response = await api.get(
      `/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER}`,
    );
    return response;
  } catch (error) {
    throw new Error('Ocorreu um erro');
  }
};

export default api;
