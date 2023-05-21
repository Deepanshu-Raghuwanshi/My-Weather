import { useEffect, useState } from "react";
import routes from "./../../routes/routes.json";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
const ErrorPage = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((preState) => preState - 1);
      }, 1000);
    }
    if (timer === 0) {
      navigate(routes.HOME);
    }
  }, [timer, navigate]);
  return (
    // <>  style={{ textAlign: "center" }}
    <>
      <div className={styles.flex}>
        <div className={styles.error}>
          <h1>Error : 404 not found</h1>
          <h3>
            please click the link<Link to={routes.HOME}>Home</Link> to redirect
            for Home Page
          </h3>
          <p> You will be redirected to Home Page in {timer} seconds</p>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
