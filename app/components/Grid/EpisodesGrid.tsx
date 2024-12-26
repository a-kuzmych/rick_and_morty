import { Episode } from "../../types/Episode";
import { EpisodeCard } from "../Cards/EpisodeCard";

interface EpisodesGridProps {
  episodes: Episode[];
}

export function EpisodesGrid({ episodes }: EpisodesGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </ul>
  );
}
