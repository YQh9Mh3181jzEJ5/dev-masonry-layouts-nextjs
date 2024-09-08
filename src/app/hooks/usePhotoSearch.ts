import { getPhotos } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

export function usePhotoSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, fetchNextPage, hasNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ["photos", searchQuery],
      queryFn: ({ pageParam = 1 }) => getPhotos(searchQuery, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        return allPages.length + 1;
      },
      enabled: !!searchQuery,
    });

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      fetchNextPage();
    }
  };

  const allImages = data?.pages.flat() ?? [];

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
    allImages,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
  };
}
