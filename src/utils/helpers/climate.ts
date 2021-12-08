export const getCurrentCloud = (cloud: string) => {
  switch (cloud) {
    case 'broken clouds':
      return require('#/assets/images/partlyCloudy.png');
    case 'scattered clouds':
      return require('#/assets/images/partlyCloudy.png');
    case 'overcast clouds':
      return require('#/assets/images/partlyCloudy.png');
    case 'few clouds':
      return require('#/assets/images/partlyCloudy.png');
    case 'mist':
      return require('#/assets/images/snowy.png');
    case 'haze':
      return require('#/assets/images/snowy.png');
    case 'clear sky':
      return require('#/assets/images/sunny.png');
    case 'rain and drizzle':
      return require('#/assets/images/rainThunder.png');
    case 'heavy intensity rain':
      return require('#/assets/images/rainThunder.png');
    case 'light intensity drizzle':
      return require('#/assets/images/rainy.png');
    case 'light rain':
      return require('#/assets/images/rainy.png');
    case 'moderate rain':
      return require('#/assets/images/rainy.png');
    default:
      break;
  }
};
