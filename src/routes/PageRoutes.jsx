import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import LandingPage from "../pages/LandingPage/LandingPage";
import WeatherDisplay from "../pages/WeatherDisplay/WeatherDisplay";
//import CitySearch from "../components/CitySearch/CitySearch";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import routes from "./routes.json";
import CityPage from "../pages/CitySearch/CityPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MasterLayout />}>
        <Route index element={<LandingPage />} />

        <Route path={routes.WEATHERDISPLAY} element={<WeatherDisplay />} />
        <Route path={routes.CITYPAGE} element={<CityPage />} />
      </Route>
      <Route path={routes.LANDINGPAGE} element={<LandingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default PageRoutes;
