import { Episode } from "../../types/Episode";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
        {episode.name}
      </h2>
      <p className="text-center text-gray-600 mb-2">Air Date: {episode.air_date}</p>
      <p className="text-center text-gray-600">Episode: {episode.episode}</p>
    </li>
  );
}
