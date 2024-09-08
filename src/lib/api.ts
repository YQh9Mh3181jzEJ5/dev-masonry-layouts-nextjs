import type { UnsplashPhoto } from "@/app/type/UnsplashPhoto";
import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  },
});

export const getPhotos = async (
  query: string,
  page = 1,
  perPage = 30
): Promise<UnsplashPhoto[]> => {
  try {
    const response = await unsplashApi.get("/search/photos", {
      params: { query, page, per_page: perPage },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
