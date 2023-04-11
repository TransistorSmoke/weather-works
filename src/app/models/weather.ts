export interface Weather {
  weather: WeatherInfo[];
  main: {
    temperature: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    area: string;
  };
  name: string;
}

interface WeatherInfo {
  main: string;
  icon: string;
}
