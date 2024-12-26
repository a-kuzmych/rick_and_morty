interface FilterDropdownProps {
  title: string;
  options: string[];
  selectedValues: string[];
  onFilterChange: (value: string) => void;
}

export function FilterDropdown({
  title,
  options,
  selectedValues,
  onFilterChange,
}: FilterDropdownProps) {
  return (
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
              onChange={() => onFilterChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </details>
  );
}
