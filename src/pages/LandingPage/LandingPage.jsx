import GetLocation from "../../components/GetLocation/GetLocation";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <>
      <body className={styles.body}>
        <div className={styles.heading}>The Weather App</div>
        <GetLocation />
      </body>
    </>
  );
};
export default LandingPage;
