import { Location } from "../../types/Location";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
        {location.name}
      </h2>
      <p className="text-center text-gray-600 mb-2">Type: {location.type}</p>
      <p className="text-center text-gray-600">Dimension: {location.dimension}</p>
    </li>
  );
}
