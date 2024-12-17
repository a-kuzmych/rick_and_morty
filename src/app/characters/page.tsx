"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Character } from "@/types/Character";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character");

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, [apiUrl]);
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("name", searchQuery);
    if (selectedStatus.length) params.set("status", selectedStatus.join(","));
    if (selectedSpecies.length) params.set("species", selectedSpecies.join(","));
    if (selectedGender.length) params.set("gender", selectedGender.join(","));

    setApiUrl(`https://rickandmortyapi.com/api/character?${params.toString()}`);
  }, [searchQuery, selectedStatus, selectedSpecies, selectedGender]);

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
  };

  const uniqueOptions = (key: keyof Character) =>
    Array.from(new Set(characters.map((character) => character[key])));

  const renderDropdown = (
    title: string,
    options: string[],
    selectedValues: string[],
    setFilter: React.Dispatch<React.SetStateAction<string[]>>
  ) => (
    <details className="relative border border-gray-300 rounded-lg">
      <summary className="p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg">
        {title}
      </summary>
      <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-full max-h-60 overflow-auto z-10">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => handleFilterChange(option, selectedValues, setFilter)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </details>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search characters..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {renderDropdown("Status", ["Alive", "Dead", "unknown"], selectedStatus, setSelectedStatus)}
        {renderDropdown("Species", uniqueOptions("species"), selectedSpecies, setSelectedSpecies)}
        {renderDropdown("Gender", ["Male", "Female", "Genderless", "unknown"], selectedGender, setSelectedGender)}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((character: Character) => (
          <li
            key={character.id}
            className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/characters/${character.id}`}>
              <img
                src={character.image}
                alt={`Image of ${character.name}`}
                className="w-full h-64 object-cover rounded-t-lg mb-4 transition-all duration-300 hover:opacity-80"
              />
              <h2 className="text-xl font-semibold text-center text-gray-900 transition-colors duration-300 hover:text-indigo-600">
                {character.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
