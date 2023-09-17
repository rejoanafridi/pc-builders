import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetAvailability,
  setPriceFilter,
  toggleAvailability,
} from '../../redux/features/filter/filterSlice';

const SideFilter = () => {
  const dispatch = useDispatch();
  const { availability, price } = useSelector((state) => state.filter);

  const handleAvailabilityToggle = (option) => {
    dispatch(toggleAvailability({ option }));
  };

  const handlePriceFilterChange = (event) => {
    const { id, value } = event.target;
    dispatch(setPriceFilter({ [id]: value }));
  };

  const handleResetAvailability = () => {
    dispatch(resetAvailability());
  };
  return (
    <div>
      <div className='mt-1 space-y-2'>
        <details
          className='overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'
          open={true} // Set open to true to make it initially open
        >
          <summary className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'>
            <span className='text-sm font-medium'> Availability </span>

            <span className='transition group-open:-rotate-180'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </span>
          </summary>

          <div className='border-t border-gray-200 bg-white'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-sm text-gray-700'>
                {' '}
                {
                  Object.values(availability).filter(Boolean).length
                } Selected{' '}
              </span>
              <button
                type='button'
                className='text-sm text-gray-900 underline underline-offset-4'
                onClick={handleResetAvailability}>
                Reset
              </button>
            </header>

            <ul className='space-y-1 border-t border-gray-200 p-4'>
              {Object.keys(availability).map((option) => (
                <li key={option}>
                  <label
                    htmlFor={`Filter${option}`}
                    className='inline-flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id={`Filter${option}`}
                      className='h-5 w-5 rounded border-gray-300'
                      checked={availability[option]}
                      onChange={() => handleAvailabilityToggle(option)}
                    />
                    <span className='text-sm font-medium text-gray-700'>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </details>

        <details className='overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'>
            <span className='text-sm font-medium'> Price </span>

            <span className='transition group-open:-rotate-180'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </span>
          </summary>

          <div className='border-t border-gray-200 bg-white'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-sm text-gray-700'>
                The highest price is $600
              </span>

              <button
                type='button'
                className='text-sm text-gray-900 underline underline-offset-4'>
                Reset
              </button>
            </header>

            <div className='border-t border-gray-200 p-4'>
              <div className='flex justify-between gap-4'>
                <label
                  htmlFor='FilterPriceFrom'
                  className='flex items-center gap-2'>
                  <span className='text-sm text-gray-600'>$</span>
                  <input
                    type='number'
                    id='from'
                    placeholder='From'
                    value={price.from}
                    onChange={handlePriceFilterChange}
                    className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                  />
                </label>

                <label
                  htmlFor='FilterPriceTo'
                  className='flex items-center gap-2'>
                  <span className='text-sm text-gray-600'>$</span>
                  <input
                    type='number'
                    id='to'
                    placeholder='To'
                    value={price.to}
                    onChange={handlePriceFilterChange}
                    className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                  />
                </label>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default SideFilter;
