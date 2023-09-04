// Component.js
import { useEffect, useState } from 'react';
import component from '../../db/component.json';
import Pagination from '../../utils/Paginate';

const ProductsComponent = () => {
  const path = window.location.pathname;
  const repath = path.replace('/', '');
  const [showLeftSide, setShowLeftSide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [data, setData] = useState([]);
  console.log(data[0]);



  const [products, setProducts] = useState([]);
 
  const itemsPerPage = 20;
  const totalPages = Math.ceil(data[0]?.length / itemsPerPage);

  const toggleLeftSide = () => {
    setShowLeftSide(!showLeftSide);
  };

  const itemDescription = (description) => {
    if (typeof description === 'string') {
      return description.split('\n');
    } else {
      return [];
    }
  };
  

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayComponent = data[0]?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item, index) => (
      <div key={index} className='w-full md:w-1/4 px-4 mb-4 min-h-[300px]'>
        <div className='shadow-md bg-white p-4 hover:bg-gray-100 cursor-pointer'>
          {/* Product Image */}
          <img
            src={item.imageUrl || ''}
            alt='Product Image'
            className='mx-auto mb-2'
            width={250}
            height={150}
          />

          {/* Product Title */}
          <h2 className='text-center text-lg font-semibold hover:text-blue-500'>
            {item.name}
          </h2>

          {/* Product Features */}
          <ul className='mt-2 flex flex-col'>
            {itemDescription(item.description).map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>

          {/* Product Price */}
          <div className='text-center text-xl mt-4 font-bold'>
            ${item.price}
          </div>

          {/* Buy Now Button */}
          <button className='bg-blue-500 text-white mt-4 py-2 rounded-full w-full hover:bg-blue-600'>
            Buy Now
          </button>
        </div>
      </div>
    ));

  useEffect(() => {
    // Fetch products and set them as an array
    fetch('/api/allProducts.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set products as an array
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Run this effect once when the component mounts

  useEffect(() => {
    // Set the filtered components as data
    const filteredComponents = products?.map((item) => item[repath]);
    setData(filteredComponents);
  }, [products,repath]);// Make sure to include products and url in the dependency array

  return (
    <div className='flex flex-wrap'>
      {/* Left Side (25% width) */}
      <div
        className={`${
          showLeftSide ? 'w-1/4' : 'hidden'
        } md:w-1/4 shadow-md bg-white p-4 md:block`}>
        {/* Price Range Slider */}
        <div className='space-y-2'>
          {/* Availability Section */}
          <div className='overflow-hidden rounded border border-gray-300'>
            <div className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900'>
              <span className='text-sm font-medium'> Availability </span>
            </div>

            <div className='border-t border-gray-200 bg-white'>
              <header className='flex items-center justify-between p-4'>
                <span className='text-sm text-gray-700'> 0 Selected </span>

                <button
                  type='button'
                  className='text-sm text-gray-900 underline underline-offset-4'>
                  Reset
                </button>
              </header>

              <ul className='space-y-1 border-t border-gray-200 p-4'>
                {/* Availability options */}
                <li>
                  <label
                    htmlFor='FilterInStock'
                    className='inline-flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id='FilterInStock'
                      className='h-5 w-5 rounded border-gray-300'
                    />
                    <span className='text-sm font-medium text-gray-700'>
                      In Stock (5+)
                    </span>
                  </label>
                </li>
                <li>
                  <label className='inline-flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id='FilterPreOrder'
                      className='h-5 w-5 rounded border-gray-300'
                    />

                    <span className='text-sm font-medium text-gray-700'>
                      Pre Order (3+)
                    </span>
                  </label>
                </li>

                <li>
                  <label className='inline-flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id='FilterOutOfStock'
                      className='h-5 w-5 rounded border-gray-300'
                    />

                    <span className='text-sm font-medium text-gray-700'>
                      Out of Stock (10+)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* Price Section */}
          <div className='overflow-hidden rounded border border-gray-300'>
            <div className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900'>
              <span className='text-sm font-medium'> Price </span>
            </div>

            <div className='border-t border-gray-200 bg-white'>
              <header className='flex items-center justify-between p-4'>
                <span className='text-sm text-gray-700'>
                  {' '}
                  The highest price is $600{' '}
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
                      id='FilterPriceFrom'
                      placeholder='From'
                      className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                    />
                  </label>
                  <label
                    htmlFor='FilterPriceTo'
                    className='flex items-center gap-2'>
                    <span className='text-sm text-gray-600'>$</span>
                    <input
                      type='number'
                      id='FilterPriceTo'
                      placeholder='To'
                      className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ... (Your left-side content here) */}
      </div>

      {/* Mobile Toggle Menu */}
      <div className='w-full md:hidden p-4 text-center'>
        <button
          onClick={toggleLeftSide}
          className='bg-blue-500 text-white py-2 px-4 rounded-full'>
          Toggle Left Side
        </button>
      </div>

      {/* Right Side (75% width) */}
      <div className='w-full md:w-3/4 p-4'>
        {/* Header with Filter and Show by Item Dropdowns */}
        {/* ... (Your header content here) */}

        <hr className='my-4 border-gray-300' />

        {/* Product Cards */}
        <div className='flex flex-wrap -mx-4'>{displayComponent}</div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default ProductsComponent;
