export interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
  likes: number;
  created_at: string;
  width: number;
  height: number;
}
