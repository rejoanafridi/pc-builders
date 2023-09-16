/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowType } from '../../redux/features/filter/filterSlice';

const DropdownButton = ({ name, options }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(setShowType(selectedOption));
  }, [dispatch, selectedOption]);



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
          aria-expanded={isOpen}>
          {selectedOption || options[0]}
          {/* Arrow */}
        </button>
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div className='origin-top-right w-full text-center absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'>
            {options?.map((option) => (
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
