import axios from 'axios';
import {OPEN_MAP_KEY} from '@env';

const openMap = axios.create({
  baseURL: 'https://www.mapquestapi.com/geocoding/v1/',
});

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
    throw new Error(`${error}`);
  }
};

export {getLocationByLatLng};
