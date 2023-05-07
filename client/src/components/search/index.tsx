import React, { useState } from "react";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
      <div className="relative w-full">
        <div className="absolute ml-4 flex items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-slate-500 dark:text-slate-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          className="bg-inherit border border-[#3e3f4b] px-4 w-full pl-10 md:w-96 transition-transform duration-500 rounded-full py-2"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
