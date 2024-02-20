import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
// import SearchBox from "./SearchBox";
import WeatherApp from "./WeatherApp";

function App() {
  // let buttonHandeler = () => {
  //   console.log("Button Was Clicked");
  // };
  // const [count, setCount] = useState(0);

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
