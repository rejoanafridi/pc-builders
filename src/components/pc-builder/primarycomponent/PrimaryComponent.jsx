/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeBuildComponents } from '../../../redux/features/products/productsSlice';

const PrimaryComponent = ({ props, name }) => {
  const dispatch = useDispatch();
  const { buildComponents } = useSelector((state) => state.products);
  const handleRemoveItem = (e, productId) => {
    e.preventDefault();
    console.log(productId);
    dispatch(removeBuildComponents(productId));
    toast.success('Components Removed Add New Component');
    localStorage.setItem('buildComponents', JSON.stringify(buildComponents));
  };

  useEffect(() => {
    localStorage.setItem('buildComponents', JSON.stringify(buildComponents));
  }, [buildComponents]);
  return (
    <>
      <div className='bg-gray-600'>
        <h2 className='text-white text-lg font-semibold'>{name} </h2>
      </div>

      {props.map((component, id) => {
        return (
          <React.Fragment key={id}>
            {buildComponents[component?.name] &&
            Object.keys(buildComponents[component?.name]).length > 0 ? (
              <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 border px-5 py-2'>
                <div className='rounded-lg lg:col-span-2'>
                  <div className='items flex gap-5'>
                    <div className=''>
                      <img
                        src={buildComponents[component?.name].imageUrl}
                        alt=''
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className='flex flex-row justify-between items-center  gap-2 w-full'>
                      <div>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-500 font-semibold'>
                          {buildComponents[component?.name].name}
                        </h2>
                        {/* <p>{buildComponents[component?.name].name}</p> */}
                      </div>
                      <p>
                        {' '}
                        Price{' '}
                        {
                          buildComponents[component?.name]?.additionalDetails
                            ?.regularPrice
                        }{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='rounded-lg flex items-center justify-end'>
                  <span className='cursor-pointer hover:text-orange-600'>
                    <RiDeleteBin4Line
                      size={20}
                      onClick={(e) => handleRemoveItem(e, component?.name)}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 border px-5 py-2'>
                <div className='rounded-lg lg:col-span-2'>
                  <div className='items flex gap-5'>
                    <div className=''>
                      <img
                        src={
                          buildComponents[component?.name]
                            ? buildComponents[component?.name].imageUrl
                            : component.icon
                        }
                        alt=''
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                      <div>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl font-bold'>
                          {component.name}
                        </h2>
                      </div>
                      {buildComponents[component?.name] ? (
                        <p> {buildComponents[component?.name]?.price} </p>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                <div className='rounded-lg flex justify-end'>
                  <Link
                    to={`/pc-builder/choose-component/${component.name
                      .toLowerCase()
                      .replace(' ', '-')}`}>
                    <button className='choose border-2 px-4 py-2 w-32 text-center hover:bg-orange-600 transition-2 hover:text-white'>
                      Choose
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PrimaryComponent;
