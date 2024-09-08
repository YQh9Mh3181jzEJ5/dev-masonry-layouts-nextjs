"use client";
import { usePhotoSearch } from "@/app/hooks/usePhotoSearch";
import { ImageGrid } from "@/components/ImageGrid";
import { SearchForm } from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import FullScreenMessage from "./FullScreenMessage";

export function SearchPhotos() {
  const { setTheme } = useTheme();

  const {
    searchQuery,
    setSearchQuery,
    handleSearch,
    allImages,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
  } = usePhotoSearch();

  return (
    <div className="min-h-screen flex flex-col">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full py-10">
        <h1 className="text-center text-4xl mb-4">何でも画像検索</h1>
        <SearchForm
          onSubmit={handleSearch}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </div>
      <main className="flex-grow px-2">
        {isLoading && <FullScreenMessage message={"Loading..."} />}
        {error && <FullScreenMessage message={"エラーが発生しました"} />}
        {!isLoading && !error && (
          <>
            {allImages.length > 0 ? (
              <ImageGrid images={allImages} />
            ) : (
              <FullScreenMessage message={"No images found"} />
            )}

            {hasNextPage && (
              <div className="flex justify-center py-8">
                <Button onClick={() => fetchNextPage()} className="px-8 py-6">
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
