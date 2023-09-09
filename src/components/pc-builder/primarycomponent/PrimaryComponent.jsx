/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryComponent = ({ props, name }) => {
  return (
    <>
      <div className='bg-gray-600'>
        <h2 className='text-white text-lg font-semibold'>{name} </h2>
      </div>

      {props.map((component, id) => (
        <React.Fragment key={id}>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 border px-5 py-2'>
            <div className='rounded-lg lg:col-span-2'>
              <div className='items flex gap-5'>
                <div className=''>
                  <img src={component.icon} alt='' height={50} width={50} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <h2 className='text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl'>
                    {component.name}
                  </h2>
                  <div className='h-2 bg-gray-300'></div>
                </div>
              </div>
            </div>
            <div className='rounded-lg flex justify-end'>
              <Link
                to={`/pc-builder/choose-component/${component.name
                  .toLowerCase()
                  .replace(' ', '-')}`}>
                <button className='choose border-2 px-4 py-2 w-32 text-center'>
                  Choose
                </button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default PrimaryComponent;
