import { Location } from "@/types/Location";

export default async function LocationsPage() {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  const data = await response.json();
  const locations = data.results;

  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {locations.map((location: Location) => {
          return (
            <li
              key={location.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
                {location.name}
              </h2>
              <p className="text-center text-gray-600 mb-2">
                Type: {location.type}
              </p>
              <p className="text-center text-gray-600">
                Dimension: {location.dimension}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}