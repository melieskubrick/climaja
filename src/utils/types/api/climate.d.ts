interface Climate {
  coord: {lon: number; lat: number};
  weather: [{id: number; main: string; description: string; icon: string}];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {speed: number; deg: number; gust: number};
  clouds: {all: number};
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Climates {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [[Object]];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  };
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        min: number;
        max: number;
      };
      uvi: number;
      weather: [Array];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: Array;
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: [Object];
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    },
  ];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
