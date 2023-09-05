/* eslint-disable react/prop-types */
import { useState } from 'react';

const DropdownButton = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  return (
    <div
      className='relative inline-block text-left'
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}>
      <div className='flex justify-center items-center gap-2'>
        <span>{name}</span>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'>
          {selectedOption || 'Select Option'}
          {/* Arrow */}
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
        </button>
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div className='origin-top-right w-full text-center absolute right-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className='block px-10 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-right w-full'
                role='menuitem'>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
