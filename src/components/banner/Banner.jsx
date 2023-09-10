// components/Banner.js

import React from 'react';
import { Button, Carousel, Input } from 'antd';
import Search from '../../utils/search/Search';

const Banner = () => {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Carousel */}
        <div className='md:col-span-1'>
          <Carousel autoplay>
            <div>
              <img
                src='https://www.startech.com.bd/image/cache/catalog/home/banner/gigbyte-month-live-now-home-banner-982x500.webp'
                alt='Carousel Image 1'
                width={900}
                height={500}
              />
            </div>
            <div>
              <img
                src='https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp'
                alt='Carousel Image 2'
                width={900}
                height={500}
              />
            </div>
            <div>
              <img
                src='https://www.startech.com.bd/image/cache/catalog/offer-page/gadget-fest-aug/live-now-gadget-fest-home-banner-982x500.webp'
                alt='Carousel Image 3'
                width={900}
                height={500}
              />
            </div>
          </Carousel>
        </div>

        {/* Input Fields and Image */}
        <div className='md:col-span-1 flex flex-col justify-center items-center bg-yellow-200 p-4'>
          <div className='flex flex-col gap-2 my-5 text-center'>
            <h1 className='text-xl md:text-2xl'>Compare Products</h1>
            <h2 className='text-sm md:text-base'>
              Choose two products to compare
            </h2>
          </div>
          <div className='mb-4 w-full md:w-2/3'>
            <Search />
          </div>
          <div className='mb-4 w-full md:w-2/3'>
            <Search />
          </div>
          <Button className='bg-orange-500 text-white' type='dashed'>
            View comparison
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
