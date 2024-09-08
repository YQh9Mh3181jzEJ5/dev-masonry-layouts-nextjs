import type { UnsplashPhoto } from "@/app/type/UnsplashPhoto";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/material";
import Image from "next/image";

interface ImageGridProps {
  images: UnsplashPhoto[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <Box sx={{ width: "100%", minHeight: 393 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {images.map((image) => (
          <Box key={image.id} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Image
              src={image.urls.regular}
              alt={image.alt_description || "Unsplash Image"}
              width={image.width}
              height={image.height}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}
