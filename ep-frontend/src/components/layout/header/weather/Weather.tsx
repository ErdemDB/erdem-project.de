import React, { useEffect, useState } from 'react';
import useWeather from './Controller';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Box, Divider, colors } from '@mui/material';
import { WeatherDescriptionType } from '../../../../api-client';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import UmbrellaOutlinedIcon from '@mui/icons-material/UmbrellaOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { InvertColors } from '@mui/icons-material';


const Weather = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [geoError, setGeoError] = useState<string>("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function (error) {
          setGeoError("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      setGeoError("Geolocation is not supported by this browser.");
    }
  }, []);

  function getWeatherIcon(WeatherDescription: WeatherDescriptionType) {
    switch (WeatherDescription) {
      case WeatherDescriptionType.Clear:
        return <WbSunnyOutlinedIcon />;
      case WeatherDescriptionType.Clouds:
        return <CloudOutlinedIcon />;
      case WeatherDescriptionType.Drizzle:
        return <GrainOutlinedIcon />;
      case WeatherDescriptionType.Rain:
        return <UmbrellaOutlinedIcon />;
      case WeatherDescriptionType.Snow:
        return <AcUnitOutlinedIcon />;
      case WeatherDescriptionType.Thunderstorm:
        return <FlashOnOutlinedIcon />;
      default:
        return null;
    }
  }

  const { weatherData, loading, error: weatherError } = useWeather(latitude, longitude);

  if (loading) return <CircularProgress style={{ color: 'white' }} />;

  if (weatherError) return <p>Fehler beim Abrufen der Wetterdaten: {weatherError.message}</p>;
  if (!weatherData) return <p>Keine Wetterdaten verfügbar.</p>;
  if (geoError) return <p>Fehler bei der Geolokalisierung: {geoError}</p>;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" p={0.5}>
        <Box>
          {getWeatherIcon(weatherData?.description)}
        </Box>
        <Typography variant="h2" component="div">
          {weatherData?.temperature}°C
        </Typography>
      </Box>
      <Typography variant="body1" component="div">
        {weatherData?.city}
      </Typography>
    </Box>
  );
};

export default Weather;