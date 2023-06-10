import React, { useEffect, useState } from "react";
import { locationDetails } from "../../services/data";
import styles from "./GetLocation.module.css";
import { useNavigate } from "react-router-dom";

const GetLocation = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const cityNavigate = () => {
    navigate("/cityPage");
  };
  const weatherNavigate = () => { 
    navigate("/weatherDisplay");
  };

  const handleLocationRequest = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude1 = position.coords.latitude;
          const longitude1 = position.coords.longitude;
          setLatitude(latitude1);
          setLongitude(longitude1);
        },
        (error) => {
          setError("Please allow access to location");
        }
      );
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      locationDetails(latitude, longitude).then((data) => {
        setContinent(data.results[0].components.continent);
        setCountry(data.results[0].components.country);
        setCity(data.results[0].components.city);
      });
    }
  }, [latitude, longitude]);

  return (
    <>
      <div className={styles.outLocation}>
        <div className={styles.location}>
          {latitude ? (
            <div>
              <span className={styles.name}> Latitude:</span> {latitude}
              <br />
              <span className={styles.name}> Longitude:</span> {longitude}
              <br />
              <span className={styles.name}> Continent:</span> {continent}
              <br />
              <span className={styles.name}> Country:</span> {country}
              <br />
              <span className={styles.name}>City:</span> {city}
              <br />
              <div>
                <button className={styles.button} onClick={weatherNavigate}>
                  Get Weather
                </button>
              </div>
            </div>
          ) : (
            <>
              <button className={styles.button} onClick={handleLocationRequest}>
                Get Location
              </button>
              <br />
              <div>{error}</div>
              <br />
              <button className={styles.buttonCity} onClick={cityNavigate}>
                Get Weather By City Name
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GetLocation;
