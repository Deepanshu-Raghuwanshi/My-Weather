//import Footer from "../../components/Footer/Footer";
//import Header from "../../components/Header/Header";
import Weather from "../../components/Weather/Weather";
import styles from "./WeatherDisplay.module.css";
const WeatherDisplay = () => {
  return (
    <>
      <body className={styles.body}>
        {/* <Header /> */}
        <Weather />
        {/* <Footer /> */}
      </body>
    </>
  );
};
export default WeatherDisplay;
