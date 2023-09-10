// Component.js
import { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import DropdownButton from '../../../utils/dropdown/DropdownButton';
import Pagination from '../../../utils/Paginate';
import Search from '../../../utils/search/Search';
import { useDispatch } from 'react-redux';
import { addProductToBuilder } from '../../../redux/features/products/productsSlice';

const ChooseComponents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { componentName } = useParams();

  const [showLeftSide, setShowLeftSide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [data, setData] = useState([]);

  const [products, setProducts] = useState([]);

  const handleAddNowClick = (productData) => {
    // Dispatch action to set the selected product
    dispatch(
      addProductToBuilder({
        [componentName]: {
          name: productData.name,
          imageUrl: productData.imageUrl,
          price: productData.price,
        },
      }),
      navigate(-1),
    );
  };

  const itemsPerPage = 20;
  const totalPages = Math.ceil(data[0]?.length / itemsPerPage);

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

  const createSlug = (text) => {
    return slugify(text, {
      replacement: '-', // Replace spaces with -
      remove: /[*+~.()'"!:@]/g, // Remove characters that are not allowed
      lower: true, // Convert to lowercase
    }).replace(/\//g, '-'); // Replace forward slashes with hyphens
  };

  const displayComponent = data[0]
    ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item, index) => (
      <div key={index} className='w-full  px-4 mb-4 '>
        <div className='shadow-md bg-white p-4 hover:bg-gray-100 cursor-pointer flex items-center'>
          {/* Product Image */}
          <div className='w-1/5'>
            <Link to={`/${createSlug(item.name)}`}>
              <img
                src={item.imageUrl || ''}
                alt='Product Image'
                className='w-full h-auto'
              />
            </Link>
          </div>

          <div className='w-3/5 p-4'>
            {/* Product Title */}
            <Link to={`/${createSlug(item.name)}`}>
              <h2 className='text-left text-lg font-semibold hover:text-blue-500'>
                {item.name}
              </h2>
            </Link>

            {/* Product Features */}
            <ul className='mt-2 flex flex-col'>
              {itemDescription(item.description).map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>

          <div className='w-1/5 text-center'>
            {/* Product Price */}
            <div className='text-xl font-bold'>${item.price}</div>

            {/* Buy Now Button */}
            <Link
              to={{
                pathname: `/pc-builder/${item.name}`, // Set the pathname for the link
                state: { productData: item }, // Pass the product data as state
              }}>
              <button className='bg-orange-500 text-white mt-4 py-2 rounded-full w-full hover:bg-orange-600'>
                Add Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));

  useEffect(() => {
    // Fetch products and set them as an array
    fetch('/api/allComponents.json')
      .then((res) => res.json())
      .then(
        (data) => setProducts(data), //Set products as an array
      )
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Run this effect once when the component mounts

  useEffect(() => {
    if (products && componentName) {
      // Filter the products array based on the presence of componentName key
      const filteredComponents = products.map((item) => item[componentName]);

      // Now, filteredComponents contains only the objects with componentName key
      setData(filteredComponents);
    }
  }, [products, componentName]);

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

      {/* Right Side (75% width) */}
      <div className='w-full md:w-3/4 p-4'>
        {/* Header with Filter and Show by Item Dropdowns */}
        {/* ... (Your header content here) */}
        <div className='flex justify-between'>
          <Search />
          <div className='flex gap-5'>
            <DropdownButton name='Show' options={[30, 40, 60, 70, 90]} />
            <DropdownButton
              name='Sort'
              options={['Default', 'Price Low-High', 'Price High-Low']}
            />
          </div>
        </div>

        <hr className='my-4 border-gray-300' />

        {/* Product Cards */}
        <div className='flex flex-col flex-wrap mx-4'>{displayComponent}</div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default ChooseComponents;
