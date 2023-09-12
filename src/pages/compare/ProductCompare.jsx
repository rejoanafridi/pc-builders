import React from 'react';
import Search from '../../utils/search/Search';

const ProductCompare = () => {
  return (
    <div className='bg-gray-100 py-8'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-semibold mb-6'>Product Comparison</h1>

        <div className='flow-root rounded-lg border border-gray-100 py-3 shadow-sm'>
          <dl className='-my-3 divide-y divide-x divide-gray-100 text-sm '>
            <div className='grid grid-cols-1  p-3 sm:grid-cols-3 border-2  '>
              <dt className='font-medium text-gray-900 flex  flex-col flex-start px-10'>
                <h2 className='text-3xl text-orange-500 '>
                  Product Comparison
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam deleniti veritatis voluptatem unde cum ullam,
                  reiciendis accusamus quo suscipit dicta.
                </p>
              </dt>
              <dd className='text-gray-700 sm:col-span-1 '>
                <div className='bg-white p-6  shadow-md border flex items-center flex-col gap-3'>
                  <Search />
                  <img
                    src='https://www.startech.com.bd/image/cache/catalog/cable/acefast/c3-04/c3-04-01-228x228.webp'
                    alt=''
                  />
                  <h2 className='text-xl font-semibold mb-4'>Product 2</h2>
                  <ul>
                    <li className='mb-2'>Value 1 for Product 2</li>
                    <li className='mb-2'>Value 2 for Product 2</li>
                    <li className='mb-2'>Value 3 for Product 2</li>
                    {/* Add more values as needed */}
                  </ul>
                  <p>Price</p>
                </div>
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                <div className='bg-white p-6  shadow-md border flex items-center flex-col gap-3'>
                  <Search />
                  <img
                    src='https://www.startech.com.bd/image/cache/catalog/cable/acefast/c3-04/c3-04-01-228x228.webp'
                    alt=''
                  />
                  <h2 className='text-xl font-semibold mb-4'>Product 2</h2>
                  <ul>
                    <li className='mb-2'>Value 1 for Product 2</li>
                    <li className='mb-2'>Value 2 for Product 2</li>
                    <li className='mb-2'>Value 3 for Product 2</li>
                    {/* Add more values as needed */}
                  </ul>
                  <p>price</p>
                </div>
              </dd>
            </div>

            <div className='grid grid-cols-1 gap-1 px-3 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 hover:bg-gray-200'>
              <dt className='font-medium text-gray-900'>Title</dt>
              <dd className='text-gray-700 sm:col-span-1'>Mr</dd>
              <dd className='text-gray-700 sm:col-span-1'>Mr</dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
              <dt className='font-medium text-gray-900'>Title</dt>
              <dd className='text-gray-700 sm:col-span-1'>Mr</dd>
              <dd className='text-gray-700 sm:col-span-1'>Mr</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
