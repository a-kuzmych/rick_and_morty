import Link from "next/link";
import { Character } from "../../types/Character";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
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
  );
}
