// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://mold-components.onrender.com",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': '4c999f7b527819e6bb09a8961b922d4c' // yoki 'x-api-key': 'YOUR_API_KEY'
//   },
//   timeout: 10000  6E45992IM4VI
// });

// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
});

export const timezoneInstance = axios.create({
  baseURL: "http://api.timezonedb.com/v2.1",
  headers: {'Content-Type': 'application/json'},
  timeout: 10000
});

export default instance;

