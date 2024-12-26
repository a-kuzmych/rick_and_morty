import { Location } from "../../types/Location";
import { LocationCard } from "../Cards/LocationCard";

interface LocationsGridProps {
  locations: Location[];
}

export function LocationsGrid({ locations }: LocationsGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </ul>
  );
}
