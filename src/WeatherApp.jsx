import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

    

  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox setWeatherin={setWeatherInfo} />
      <br />
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
