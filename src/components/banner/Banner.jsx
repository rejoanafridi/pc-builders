// components/Banner.js

import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'antd';

import { Link } from 'react-router-dom';
import SelectSearchProduct from '../../utils/SelectSearchProduct/SelectSearchProduct';
import {
  addProductCompareFirst,
  addProductCompareSecond,
} from '../../redux/features/products/productsSlice';
import { useDispatch } from 'react-redux';

const Banner = () => {
  const dispatch = useDispatch();
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [selectedProduct2, setSelectedProduct2] = useState(null);

  console.log(selectedProduct1, 'handleProductSelect1');
  console.log(selectedProduct2, 'handleProductSelect2');
  // Callback function to receive selectProduct from SelectSearchProduct
  const handleProductSelect1 = (product) => {
    setSelectedProduct1(product);
  };
  const handleProductSelect2 = (product) => {
    setSelectedProduct2(product);
  };

  useEffect(() => {
    dispatch(addProductCompareFirst(selectedProduct1));
  }, [dispatch, selectedProduct1]);
  useEffect(() => {
    dispatch(addProductCompareSecond(selectedProduct2));
  }, [dispatch, selectedProduct2]);
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
            <SelectSearchProduct onSelectProduct={handleProductSelect1} />
          </div>
          <div className='mb-4 w-full md:w-2/3'>
            <SelectSearchProduct onSelectProduct={handleProductSelect2} />
          </div>
          <Link to='/product/compare'>
            <Button className='bg-orange-500 text-white' type='dashed'>
              View comparison
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
