import { useState, useEffect } from 'react';
import {WeatherControllerApi, GetWeatherRequest, WeatherDTO} from '../../../../api-client';

function useWeather(latitude: number, longitude: number) {
  const [weatherData, setWeatherData] = useState<WeatherDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const api = new WeatherControllerApi();
        const requestParameters: GetWeatherRequest = { latitude, longitude };
        const data = await api.getWeather(requestParameters);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchWeather();
    }
  }, [latitude, longitude]);

  return { weatherData, loading, error };
}

export default useWeather;