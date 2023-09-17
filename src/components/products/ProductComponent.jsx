import React, { useEffect, useState } from 'react';
import Pagination from '../../utils/Paginate';
import DropdownButton from '../../utils/dropdown/DropdownButton';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useDispatch, useSelector } from 'react-redux';
import SelectShowFilter from '../../utils/SelectShowFilter';
import Loader from '../../utils/loader/Loader';
import SideFilter from '../../utils/sideFilter/SideFilter';
import { addToProductCart } from '../../redux/features/products/productsSlice';
import { toast } from 'react-toastify';

const ProductsComponent = () => {
  const dispatch = useDispatch();
  const { show, type, availability, price } = useSelector(
    (state) => state.filter,
  );
  console.log(availability);
  const path = window.location.pathname;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectType, setSelectType] = useState(type);
  const repath = path.replace('/', '');
  const [showLeftSide, setShowLeftSide] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const itemsToDisplay = data[0];

  // Adjust the number of products per page as needed
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
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    }).replace(/\//g, '-');
  };

  const handleBuyNow = (e, findProduct) => {
    e.preventDefault();
    dispatch(
      addToProductCart({
        id: findProduct.uuid,
        productImage: findProduct.imageUrl,
        productName: findProduct.name,
        productModel: findProduct?.additionalDetails?.keyFeatures[1],
        quantity: 1,
        unitPrice: findProduct?.additionalDetails?.regularPrice,
      }),
    );
    toast.success('Product Added to card successfully');
  };

  const displayComponent = itemsToDisplay
    ?.filter((product) => {
      if (availability.inStock) {
        return product.additionalDetails.status === 'In Stock';
      } else if (availability.outOfStock) {
        return product.additionalDetails.status === 'Out Of Stock';
      } else if (availability.preOrder) {
        return product.additionalDetails.status === 'Pre Order';
      } else {
        return product;
      }
    })
    ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((item, index) => (
      <React.Fragment key={index}>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4'>
          <div className='shadow-md bg-white p-4 hover:bg-gray-100 cursor-pointer h-full flex flex-col'>
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
              <div className='text-center text-xl mt-auto font-bold'>
                ${item.price}
              </div>
            </Link>
            <div className='mt-auto'>
              <button
                className='bg-orange-500 text-white py-2 rounded-full w-full hover:bg-orange-600'
                onClick={(e) => handleBuyNow(e, item)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    ));

  useEffect(() => {
    fetch('/api/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTimeout(() => {
          setLoading(false);
        }, 200); //
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    const filteredComponents = products?.map((item) => item[repath]);
    setData(filteredComponents);
  }, [products, repath]);

  useEffect(() => {
    if (show) {
      setItemsPerPage(show);
    }
  }, [show]);
  useEffect(() => {
    if (type) {
      setSelectType(type);
    }
  }, [type]);

  return (
    <div className='flex flex-wrap'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className={`${
              showLeftSide ? 'w-1/2 lg:w-1/4' : 'hidden md:block w-1/4'
            } shadow-md bg-white p-4`}>
            <div className='space-y-2'>
              <SideFilter />
            </div>

            {/* ... (Your left-side content here) */}
          </div>
          <div className='w-full md:w-3/4 p-4'>
            <div className='flex flex-col justify-between items-center sm:flex-row md:justify-between md:items-center lg:flex-row lg:items-center'>
              <h1 className='font-bold text-orange-500 text-2xl mb-4 sm:mb-0'>
                {repath.toUpperCase()}
              </h1>
              <div className='flex flex-row sm:flex-row lg:flex-row gap-5'>
                <DropdownButton
                  name='Show'
                  options={[10, 30, 40, 60, 70, 90]}
                />
                <SelectShowFilter />
              </div>
            </div>

            <hr className='my-4 border-gray-300' />
            <div className='flex flex-wrap mx-2'>{displayComponent}</div>
            {totalPages > 1 && (
              <Pagination
                pageCount={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsComponent;
