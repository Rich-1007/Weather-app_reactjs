import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const Hot_Url =
    "https://images.unsplash.com/photo-1442528010304-834a5d4f3925?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_Url =
    "https://images.unsplash.com/photo-1608581796221-415be903abdb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_Url =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={
            info.humidity > 70 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_Url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} 
            {/* info.humidity > 70 
            ? <ThunderstormIcon/> 
            : info.temp > 15 
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/> */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temperture : {info.temp} &deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempMin}</p>
            <p>Max Temp : {info.tempMax}</p>
            <p>
              The Weather is {info.weather} Feels Like : {info.feelsLike}&deg;C
              <p></p>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
