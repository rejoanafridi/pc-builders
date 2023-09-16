/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';
import debounce from 'lodash.debounce';
import {
  addProductCompareFirst,
  addProductCompareSecond,
} from '../../redux/features/products/productsSlice';
import { useDispatch } from 'react-redux';

const CompareSearch = ({ compare }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const [selectProduct, setSelectProduct] = useState(false);
  console.log(selectProduct);


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
    // setSelectProduct(false);
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

  useEffect(() => {
    if (compare === 'firstSearch') {
      dispatch(addProductCompareFirst(selectProduct));
    }
    if (compare === 'secondSearch') {
      dispatch(addProductCompareSecond(selectProduct));
    }
  }, [dispatch, selectProduct, compare]);

  const handleClickOutside = (e) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target) &&
      inputRef.current !== e.target
    ) {
      setShowResults(false);
    }
  };

  const handleProductSelect = (e, result) => {
    e.preventDefault();
    setShowResults(false);
    setSearchTerm('');
    setSelectProduct(result);
    // Call the callback function to pass selectProduct to the parent component
  };

  return (
    <div className='relative w-96 z-10' ref={containerRef}>
      <input
        type='text'
        placeholder='Search'
        className='px-2 py-1 rounded-lg border border-gray-300 focus:outline-none w-full text-black'
        onChange={(e) => handleInputChange(e)}
        value={searchTerm || selectProduct?.name}
        ref={inputRef}
      />
      {showResults && (
        <div className='absolute left-0 max-h-80 overflow-y-auto text-black w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          {searchResults?.slice(0, 10).map((result, index) => (
            <div
              key={index}
              onClick={(e) => handleProductSelect(e, result)}
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
    </div>
  );
};

export default CompareSearch;
