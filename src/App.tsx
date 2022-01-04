import React, { useState, ChangeEvent, useEffect } from "react";
import "./App.css";
import { Weather } from "./weather";

const App: React.FC = () => {
  const [city, setCity] = useState("Korea");
  const [weather, setWeather] = useState<Weather | null>(null);
  useEffect(() => {
    getWeather(city);
  }, []);
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const suffix = "&units=imperial&appid=30b92d8d96d8f6f8a9a728b8b0d10549";

  const getWeather = async (city: string) => {
    const response = await fetch(baseUrl + city + suffix);
    if (response.status === 200) {
      const jsonWeater = await response.json();
      const cityTemp: Weather = jsonWeater.main;
      cityTemp.city = jsonWeater.name;
      setWeather(cityTemp);
    } else {
      setWeather(null);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter city" onChange={handleChange} />
        <button type="submit">Get weather</button>
        <h2>City:{city}</h2>
      </form>
    </div>
  );
};

export default App;
