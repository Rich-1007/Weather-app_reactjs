import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  if (weatherInfo) {
    console.log(weatherInfo);
  }

  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox setWeatherin={setWeatherInfo} />
      <br />
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
