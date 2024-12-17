import { Episode } from "@/types/Episode";

export default async function EpisodesPage() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  const episodes = data.results;

  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {episodes.map((episode: Episode) => {
          return (
            <li
              key={episode.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
                {episode.name}
              </h2>
              <p className="text-center text-gray-600 mb-2">
                Air Date: {episode.air_date}
              </p>
              <p className="text-center text-gray-600">
                Episode: {episode.episode}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}