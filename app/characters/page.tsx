"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "../components/SearchBar";
import { FilterDropdown } from "../components/FilterDropdown";
import { CharactersGrid } from "../components/Grid/CharactersGrid";
import PaginationRounded from "../components/Pagination";
import { Character } from "../types/Character";

export default function CharactersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("name") || "");
  const [selectedStatus, setSelectedStatus] = useState<string[]>(searchParams.get("status")?.split(",") || []);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>(searchParams.get("species")?.split(",") || []);
  const [selectedGender, setSelectedGender] = useState<string[]>(searchParams.get("gender")?.split(",") || []);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [totalPages, setTotalPages] = useState(1);

  const updateURL = () => {
    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.set("name", searchQuery);
    if (selectedStatus.length > 0) queryParams.set("status", selectedStatus.join(","));
    if (selectedSpecies.length > 0) queryParams.set("species", selectedSpecies.join(","));
    if (selectedGender.length > 0) queryParams.set("gender", selectedGender.join(","));
    queryParams.set("page", currentPage.toString());

    router.push(`?${queryParams.toString()}`);
  };

  const handleFilterChange = (
    value: string,
    selectedValues: string[],
    setFilter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedValues.includes(value)) {
      setFilter(selectedValues.filter((item) => item !== value));
    } else {
      setFilter([...selectedValues, value]);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const queryParams = new URLSearchParams();
      queryParams.set("page", currentPage.toString());
      if (searchQuery) queryParams.set("name", searchQuery);
      if (selectedStatus.length > 0) queryParams.set("status", selectedStatus.join(","));
      if (selectedSpecies.length > 0) queryParams.set("species", selectedSpecies.join(","));
      if (selectedGender.length > 0) queryParams.set("gender", selectedGender.join(","));

      const url = `https://rickandmortyapi.com/api/character?${queryParams.toString()}`;
      const response = await fetch(url);
      const data = await response.json();

      setCharacters(data.results || []);
      setTotalPages(data.info?.pages || 1);
    };

    fetchCharacters();
    updateURL();
  }, [searchQuery, selectedStatus, selectedSpecies, selectedGender, currentPage]);

  return (
    <div className="p-6">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FilterDropdown
          title="Status"
          options={["Alive", "Dead", "Unknown"]}
          selectedValues={selectedStatus}
          onFilterChange={(value) => handleFilterChange(value, selectedStatus, setSelectedStatus)}
        />
        <FilterDropdown
          title="Species"
          options={["Human", "Alien"]}
          selectedValues={selectedSpecies}
          onFilterChange={(value) => handleFilterChange(value, selectedSpecies, setSelectedSpecies)}
        />
        <FilterDropdown
          title="Gender"
          options={["Male", "Female", "Genderless", "Unknown"]}
          selectedValues={selectedGender}
          onFilterChange={(value) => handleFilterChange(value, selectedGender, setSelectedGender)}
        />
      </div>

      <CharactersGrid characters={characters} />

      <PaginationRounded
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
