// auth.ts
import axios, { AxiosResponse } from "axios";
import {
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from "../config";

let accessToken: string | null = null;
let expirationTime: number = 0;

const isTokenExpired = () => {
  return Date.now() >= expirationTime;
};

export const authenticateSpotify = async (): Promise<string | null> => {
  if (accessToken && !isTokenExpired()) {
    return accessToken;
  }

  const basicAuth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response: AxiosResponse<any> = await axios.post(
      `${SPOTIFY_AUTH_URL}/token`,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;

    expirationTime = Date.now() + response.data.expires_in * 1000;
    return accessToken;
  } catch (error) {
    throw new Error("Authentication failed");
  }
};
