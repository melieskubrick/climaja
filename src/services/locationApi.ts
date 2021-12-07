import axios from 'axios';
import {OPEN_MAP_KEY} from "@env"

const locationApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
});

const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

const openMap = axios.create({
  baseURL: 'https://www.mapquestapi.com/geocoding/v1/',
});

const getStates = async () => {
  const { data } = await locationApi.get('localidades/estados?orderBy=nome');

  return data;
};

const getCities = async (sigla: string) => {
  const { data } = await locationApi.get(`localidades/estados/${sigla}/distritos?orderBy=nome`);

  return data;
};

const getLocationInfoByCep = async (cep: string) => {
  try {
    const response = await viaCep.get(`${cep}/json/`);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    }

    return error;
  }
};

const getLocationByLatLng = async (lat: number, lng: number) => {
  try {
    return await openMap.get('reverse', {
      params: {
        key: OPEN_MAP_KEY,
        location: `${lat},${lng}`,
        includeRoadMetadata: true,
        includeNearestIntersection: true,
      },
    });
  } catch (error) {
    if (error.response) {
      return error.response;
    }

    return error;
  }
};

export { getStates, getCities, getLocationInfoByCep, getLocationByLatLng };
