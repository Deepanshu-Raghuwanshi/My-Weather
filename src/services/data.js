export const citySearch = (cityName) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6217704f4df7993c6a20a859a4c86097`
  ).then((res) => res.json());
};

export const locationDetails = (latitude, longitude) => {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=10273cca153a4d58b38acadc3b5e57f8`
  ).then((res) => res.json());
};

export const getWeather = (latitude, longitude) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6217704f4df7993c6a20a859a4c86097`
  ).then((res) => res.json());
};
