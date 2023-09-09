import { useEffect, useState } from 'react';
import Pagination from '../../utils/Paginate';
import DropdownButton from '../../utils/dropdown/DropdownButton';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const ProductsComponent = () => {
  const path = window.location.pathname;
  const repath = path.replace('/', '');
  const [showLeftSide, setShowLeftSide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const itemsPerPage = 12; // Adjust the number of products per page as needed
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

  const createSlug = (text) => {
    return slugify(text, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    }).replace(/\//g, '-');
  };

  const displayComponent = data[0]
    ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4'>
        <div className='shadow-md bg-white p-4 hover:bg-gray-100 cursor-pointer h-full '>
          <Link to={`/${createSlug(item.name)}`}>
            <img
              src={item.imageUrl || ''}
              alt='Product Image'
              className='mx-auto mb-2'
              width={250}
              height={150}
            />
            <h2 className='text-center text-lg font-semibold hover:text-blue-500'>
              {item.name}
            </h2>
            <ul className='mt-2 flex flex-col'>
              {itemDescription(item.description).map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
            <div className='text-center text-xl mt-4 font-bold'>
              ${item.price}
            </div>
            <button className='bg-blue-500 text-white mt-4 py-2 rounded-full w-full hover:bg-blue-600'>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    ));

  useEffect(() => {
    fetch('/api/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    const filteredComponents = products?.map((item) => item[repath]);
    setData(filteredComponents);
  }, [products, repath]);

  return (
    <div className='flex flex-wrap'>
      <div
        className={`${
          showLeftSide ? 'w-1/2 lg:w-1/4' : 'hidden md:block w-1/4'
        } shadow-md bg-white p-4`}>
        {/* Price Range Slider */}
        <div className='space-y-2'>
          {/* Availability Section */}
          <div className='overflow-hidden rounded border border-gray-300'>
            <div className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900'>
              <span className='text-sm font-medium'> Availability </span>
            </div>

            <div className='border-t border-gray-200 bg-white'>
              {/* ... (Your availability filter content here) */}
            </div>
          </div>

          {/* Price Section */}
          <div className='overflow-hidden rounded border border-gray-300'>
            <div className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900'>
              <span className='text-sm font-medium'> Price </span>
            </div>

            <div className='border-t border-gray-200 bg-white'>
              {/* ... (Your price filter content here) */}
            </div>
          </div>
        </div>

        {/* ... (Your left-side content here) */}
      </div>

      <div className='w-full md:w-3/4 p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-orange-500 text-2xl'>
            {repath.toUpperCase()}
          </h1>
          <div className='flex gap-5'>
            <DropdownButton name='Show' options={[30, 40, 60, 70, 90]} />
            <DropdownButton
              name='Sort'
              options={['Default', 'Price Low-High', 'Price High-Low']}
            />
          </div>
        </div>
        <hr className='my-4 border-gray-300' />
        <div className='flex flex-wrap mx-2'>{displayComponent}</div>
        {totalPages > 1 && (
          <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default ProductsComponent;
