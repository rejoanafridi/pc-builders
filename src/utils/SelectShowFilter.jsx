import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../redux/features/filter/filterSlice';

const SelectShowFilter = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(setFilterType(selectedOption));
  }, [dispatch, selectedOption]);

  return (
    <div>
      <div className='relative inline-block text-left flex items-center gap-4'>
        <h2>Sort</h2>
        <select
          id='cars'
          onChange={(e) => setSelectedOption(e.target.value)}
          className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring'>
          <option value='low-to-high'>Low to High</option>
          <option value='high-to-low'>High to Low</option>
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </select>
      </div>
    </div>
  );
};

export default SelectShowFilter;
