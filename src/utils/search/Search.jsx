import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Simulate fetching search results (you can replace this with your API call)
    // For example, you can use fetch() or Axios to get search results from your server
    const mockSearchResults = [
      'Search Result 1',
      'Search Result 2',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
      'Search Result 3',
    ];

    // Update search results based on the input value
    const filteredResults = mockSearchResults.filter((result) =>
      result.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setSearchResults(filteredResults);

    // Show/hide results box
    if (inputValue.trim() === '') {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className='relative w-96 z-10'>
      <input
        type='text'
        placeholder='Search'
        className='px-2 py-1 rounded-lg border border-gray-300 focus:outline-none w-full text-black'
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        onChange={handleInputChange}
        value={searchTerm}
      />
      {showResults && (
        <div className='absolute left-0  max-h-80 overflow-y-auto text-black w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          {searchResults.map((result, index) => (
            <div key={index} className='p-2 cursor-pointer hover:bg-gray-100'>
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
