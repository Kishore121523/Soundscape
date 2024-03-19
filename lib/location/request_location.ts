import axios from "axios";

interface GeoLocation {
  latitude: number;
  longitude: number;
}

export const getGeoLocationFromRequestHeaders =
  async (): Promise<GeoLocation> => {
    try {
      const response = await axios.get("https://ipinfo.io/json");
      const { loc } = response.data;
      const [latitude, longitude] = loc.split(",").map(parseFloat);
      return { latitude, longitude };
    } catch (error: any) {
      throw new Error("Failed to fetch geolocation: " + error.message);
    }
  };
