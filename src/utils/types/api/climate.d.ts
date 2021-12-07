interface Climate {
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
      temp: [Object];
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
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
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
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
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
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
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
      rain: number;
      sunrise: number;
      sunset: number;
      temp: [Object];
      uvi: number;
      weather: [Array];
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
