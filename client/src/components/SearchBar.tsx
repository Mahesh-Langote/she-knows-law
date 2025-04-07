import React, { useContext } from 'react';
import { Input } from '@/components/ui/input';
import { SearchContext } from '../context/SearchContext';

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search laws..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
      />
      <div className="absolute left-3 top-2.5 text-neutral-400">
        <i className="bx bx-search text-lg"></i>
      </div>
    </div>
  );
};

export default SearchBar;
