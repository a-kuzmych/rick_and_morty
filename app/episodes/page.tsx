"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "../components/SearchBar";
import { EpisodesGrid } from "../components/Grid/EpisodesGrid";
import PaginationRounded from "../components/Pagination";
import { Episode } from "../types/Episode";

export default function EpisodesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("name") || "");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalPages, setTotalPages] = useState(1);

  const updateURL = () => {
    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.set("name", searchQuery);
    queryParams.set("page", currentPage.toString());

    router.push(`?${queryParams.toString()}`);
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode?name=${searchQuery}&page=${currentPage}`
        );
        const data = await response.json();
        if (data.results) {
          setEpisodes(data.results);
          setTotalPages(data.info?.pages || 1);
        } else {
          setEpisodes([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setEpisodes([]);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEpisodes();
    updateURL();
  }, [searchQuery, currentPage]);

  return (
    <div className="p-6">
      <SearchBar
        value={searchQuery}
        onChange={(value) => {
          setSearchQuery(value);
        }}
      />

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <EpisodesGrid episodes={episodes} />
          <PaginationRounded
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
