import { SearchIcon } from "@heroicons/react/solid";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;
