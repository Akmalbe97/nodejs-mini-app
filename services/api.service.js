import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "../storage.service.js";
const getWeather = async (city) => {
  const token = await getKeyValue(process.env.TOKEN ?? TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("API doesn't exist");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );

  return data
};

export { getWeather };
