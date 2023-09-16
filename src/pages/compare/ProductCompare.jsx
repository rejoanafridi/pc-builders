import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import SelectSearchProduct from '../../utils/SelectSearchProduct/SelectSearchProduct';

const ProductCompare = () => {
  const { productCompare } = useSelector((state) => state.products);
  const [data, setData] = useState(null);

  let specifications = {
    ...data?.selectSecondProduct?.specifications,
    ...data?.selectFirstProduct?.specifications,
  };
  console.log(specifications);
  const keys = Object.keys(specifications);
  console.log(keys);

  useEffect(() => {
    setData(productCompare);
  }, [productCompare]);
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
                  <SelectSearchProduct compare={'firstSearch'} />
                  <img src={data?.selectFirstProduct?.imageUrl} alt='' />
                  <h2 className='text-xl font-semibold mb-4'>
                    {data?.selectFirstProduct?.name}
                  </h2>

                  <p>Price {data?.selectFirstProduct?.price}</p>
                </div>
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                <div className='bg-white p-6  shadow-md border flex items-center flex-col gap-3'>
                  <SelectSearchProduct compare={'secondSearch'} />
                  <img src={data?.selectSecondProduct?.imageUrl} alt='' />
                  <h2 className='text-xl font-semibold mb-4'>
                    {data?.selectSecondProduct?.name}
                  </h2>

                  <p>Price {data?.selectSecondProduct?.price}</p>
                </div>
              </dd>
            </div>

            <div className='grid grid-cols-1 gap-1  py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 hover:bg-gray-200'>
              <dt className='font-medium text-gray-900'>Model</dt>
              <dd className='text-gray-700 sm:col-span-1'>
                {' '}
                {data?.selectFirstProduct?.additionalDetails?.keyFeatures[1]}
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectSecondProduct?.additionalDetails?.keyFeatures[1]}
              </dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
              <dt className='font-medium text-gray-900'>Brand</dt>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectFirstProduct?.additionalDetails?.brand}
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                {' '}
                {data?.selectSecondProduct?.additionalDetails?.brand}
              </dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
              <dt className='font-medium text-gray-900'>Availability</dt>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectFirstProduct?.additionalDetails?.status}
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectSecondProduct?.additionalDetails?.status}
              </dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
              <dt className='font-medium text-gray-900'>Rating</dt>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectFirstProduct?.additionalDetails?.rating}
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectSecondProduct?.additionalDetails?.rating}
              </dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
              <dt className='font-medium text-gray-900'>Summary</dt>
              <dd className='text-gray-700 sm:col-span-1'>
                {' '}
                {data?.selectFirstProduct?.additionalDetails?.keyFeatures?.map(
                  (item) => (
                    <>
                      <li>{item}</li>
                    </>
                  ),
                )}
              </dd>
              <dd className='text-gray-700 sm:col-span-1'>
                {data?.selectSecondProduct?.additionalDetails?.keyFeatures?.map(
                  (item) => (
                    <>
                      <li>{item}</li>
                    </>
                  ),
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
