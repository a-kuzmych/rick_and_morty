"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "../components/SearchBar";
import { LocationsGrid } from "../components/Grid/LocationsGrid";
import PaginationRounded from "../components/Pagination";
import { Location } from "../types/Location";

export default function LocationsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [locations, setLocations] = useState<Location[]>([]);
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
    const fetchLocations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/location?name=${searchQuery}&page=${currentPage}`
        );
        const data = await response.json();
        if (data.results) {
          setLocations(data.results);
          setTotalPages(data.info?.pages || 1);
        } else {
          setLocations([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLocations([]);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
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
          <LocationsGrid locations={locations} />
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
