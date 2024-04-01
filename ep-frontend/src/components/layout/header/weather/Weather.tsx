import React, { useEffect, useState } from 'react';
import useWeather from './Controller';
import CircularProgress from '@mui/material/CircularProgress';
import {Typography } from '@mui/material';


function getIcon(description: string) {

}

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

  const { weatherData, loading, error: weatherError } = useWeather(latitude, longitude);

  if (loading) return <CircularProgress style={{ color: 'white' }} />;
  {/*
  if (weatherError) return <p>Fehler beim Abrufen der Wetterdaten: {weatherError.message}</p>;
  if (!weatherData) return <p>Keine Wetterdaten verfügbar.</p>;
  if (geoError) return <p>Fehler bei der Geolokalisierung: {geoError}</p>;
  */}
  return (
    <div>
      {/* <p>Beschreibung: {weatherData.description}</p> */}
      {/* <p>Temperatur: {weatherData.temperature}°C</p>*/}

      <Typography variant="h1" component="div">
        17°C, <Typography variant="h2" component="div">{weatherData?.city}</Typography>
      </Typography>
    </div>
  );
};

export default Weather;