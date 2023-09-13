import React, { useEffect, useState, useRef } from 'react';
import debounce from 'lodash.debounce';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

const Search = ({ clickable }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const debouncedSearch = debounce((term) => {
    const filteredResults = data.filter((result) =>
      result.name.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(filteredResults);
    setShowResults(true);
  }, 300);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/allprod.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const createSlug = (text) => {
    return slugify(text, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    }).replace(/\//g, '-');
  };

  const handleClickOutside = (e) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target) &&
      inputRef.current !== e.target
    ) {
      setShowResults(false);
    }
  };

  const handleLinkClick = () => {
    setShowResults(false);
    setSearchTerm('');
  };

  return (
    <div className='relative w-96 z-10' ref={containerRef}>
      <input
        type='text'
        placeholder='Search'
        className='px-2 py-1 rounded-lg border border-gray-300 focus:outline-none w-full text-black'
        onChange={(e) => handleInputChange(e)}
        value={searchTerm}
        ref={inputRef}
      />
      {showResults && (
        <div className='absolute left-0 max-h-80 overflow-y-auto text-black w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          {searchResults?.slice(0, 10).map((result, index) => (
            <div
              key={index}
              className='p-2 cursor-pointer hover:bg-gray-100 flex gap-3'>
              <img src={result.imageUrl} alt='' height={40} width={40} />
              <div>
                <p>{result.name}</p>
                <p className='text-orange-500 '>{result.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {showResults && clickable ? (
        <div className='absolute left-0 max-h-80 overflow-y-auto text-black w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          {searchResults?.slice(0, 10).map((result, index) => (
            <div key={index} className='p-2  hover:bg-gray-100 flex gap-3'>
              <Link
                to={`/${createSlug(result.name)}`}
                onClick={handleLinkClick} // Add click event to hide results
              >
                <img src={result.imageUrl} alt='' height={80} width={80} />
              </Link>
              <div>
                <Link
                  to={`/${createSlug(result.name)}`}
                  onClick={handleLinkClick} // Add click event to hide results
                >
                  <p>{result.name}</p>
                </Link>
                <p className='text-orange-500 '>{result.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
