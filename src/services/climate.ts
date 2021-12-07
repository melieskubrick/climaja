import {OPEN_WEATHER} from '@env';
import api from './api';

export const getCurrentClimate = async (lat: string, lon: string) => {
  try {
    const response = await api.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER}`,
    );
    return response;
  } catch (error) {
    throw new Error('Ocorreu um erro');
  }
};
export const getCurrentClimates = async (lat: string, lon: string) => {
  try {
    const response = await api.get(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${OPEN_WEATHER}`,
    );
    console.log('lat long', lat, lon);
    return response;
  } catch (error) {
    throw new Error('Ocorreu um erro');
  }
};
