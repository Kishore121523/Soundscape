import axios, { AxiosResponse } from "axios";
import { SPOTIFY_API_BASE_URL } from "../config";
import { authenticateSpotify } from "./auth";

export const getRecommendations = async (): Promise<AxiosResponse<any>> => {
  const accessToken = await authenticateSpotify();

  try {
    const response: AxiosResponse<any> = await axios.get(
      `${SPOTIFY_API_BASE_URL}/recommendations`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          // TODO: Pass additional API reqquest params
          seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
        },
      }
    );

    return response;
  } catch (error) {
    throw new Error("Failed to get recommendations");
  }
};
