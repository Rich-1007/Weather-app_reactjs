import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temperture : {info.temp} &deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempMin}</p>
            <p>Max Temp : {info.tempMax}</p>
            <p>
              The Weather is {info.werather} Feels Like : {info.feelslike}{" "}
              &deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
