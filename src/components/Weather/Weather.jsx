import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { getWeather } from "../../services/data";
import TimeDate from "../Time-Date/TimeDate";

const Weather = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [details, setDetails] = useState({});
  let Obj = {};
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude1 = position.coords.latitude;
      const longitude1 = position.coords.longitude;
      setLatitude(latitude1);
      setLongitude(longitude1);
    });
  }, []);
  useEffect(() => {
    if (latitude && longitude) {
      getWeather(latitude, longitude).then((data) => {
        Obj.Temp = data.main.temp - 273.15;
        Obj.FeelsLike = data.main.feels_like - 273.15;
        Obj.Pressure = data.main.pressure;
        Obj.Humidity = data.main.humidity;
        Obj.Visibility = data.visibility / 1000;
        Obj.WindSpeed = data.wind.speed;
        Obj.WindDirection = data.wind.deg;
        Obj.Sunrise = new Date(data.sys.sunrise * 1000).toString();
        Obj.Sunset = new Date(data.sys.sunset * 1000).toString();
        Obj.Icon = data.weather[0].main;
        Obj.City = data.name;

        setDetails(Obj);
      });
    }
  }, [latitude, longitude]);

  const windDirection = (degree) => {
    if ((degree > 337.5 && degree < 360) || (degree > 22.5 && degree < 22.5)) {
      return "North";
    } else if (degree > 22.5 && degree < 67.5) {
      return "North East";
    } else if (degree > 67.5 && degree < 112.5) {
      return "East";
    } else if (degree > 122.5 && degree < 157.5) {
      return "South East";
    } else if (degree > 157.5 && degree < 202.5) {
      return "South";
    } else if (degree > 202.5 && degree < 247.5) {
      return "South West";
    } else if (degree > 247.5 && degree < 292.5) {
      return "West";
    } else if (degree > 292.5 && degree < 337.5) {
      return "North West";
    }
  };
  const direction = windDirection(details.WindDirection);

  return (
    <>
      {latitude && longitude ? (
        <div className={styles.outer}>
          <div className={styles.inner}>
            <h3>
              <span className={styles.span}>Current Weather</span>
            </h3>
            <div className={styles.date}>
              <TimeDate />
            </div>
            <div className={styles.table}>
              <p className={styles.para}>
                <span className={styles.span}>City -</span>
                {details.City}
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Temperature -</span>
                {Math.round(details.Temp)} Degree Celcius
              </p>

              <p className={styles.para}>
                <span className={styles.span}> Real Feels Like -</span>
                {Math.round(details.FeelsLike)} Degree Celcius
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Humidity - </span>
                {details.Humidity} %
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Visibility - </span>
                {details.Visibility} Km
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Pressure -</span>
                {details.Pressure} mb
              </p>

              <p className={styles.para}>
                <span className={styles.span}> WindSpeed -</span>
                {details.WindSpeed} Km/h {direction}
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Sunrise -</span> {details.Sunrise}
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Sunset - </span>
                {details.Sunset}
              </p>

              <p className={styles.para}>
                <span className={styles.span}>Sky -</span> {details.Icon}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.error}>
          Allow the location for current weather
        </div>
      )}
    </>
  );
};
export default Weather;
