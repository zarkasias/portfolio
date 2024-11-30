import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

interface BlogTableHeaderProps {
  onSearch: (searchTerm: string) => void;
  onSort: () => void;
}

const BlogTableHeader = ({ onSearch, onSort }: BlogTableHeaderProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-full sm:w-64">
        <input
          type="text"
          placeholder="Search blogs..."
          onChange={handleSearch}
          className="w-full px-4 py-1 rounded-lg bg-gray-800 text-gray-100 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        className="ml-4 pr-2 text-gray-400 hover:text-gray-100 transition-colors"
        onClick={onSort}
      >
        <FontAwesomeIcon icon={faSort} />
      </button>
    </div>
  );
};

export default BlogTableHeader;
