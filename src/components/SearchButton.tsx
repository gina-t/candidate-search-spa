import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchButton: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/userSearch?query=${searchQuery}`);
    }
  };

  return (
    <div className="flex flex-1 justify-start px-2 lg:ml-0 lg:justify-start">
      <form onSubmit={handleSearchSubmit} className="grid w-full max-w-md grid-cols-1 lg:max-w-xs">
        <div className="flex items-center">
          <input
            name="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="block w-full rounded-md bg-gray-700 py-2 pl-10 pr-3 text-base text-white outline-none placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm"
          />
          <button
            type="submit"
            className="ml-2 rounded-md bg-fuchsia-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-800"
          >
            Search
          </button>
        </div>
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="pointer-events-none absolute ml-3 w-5 h-5 self-center text-gray-400"
        />
      </form>
    </div>
  );
};

export default SearchButton;