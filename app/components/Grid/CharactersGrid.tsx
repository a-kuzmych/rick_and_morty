import { Character } from "../../types/Character";
import { CharacterCard } from "../Cards/CharacterCard";

interface CharactersGridProps {
  characters: Character[];
}

export function CharactersGrid({ characters }: CharactersGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
}