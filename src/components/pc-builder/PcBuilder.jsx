import React, { useState } from 'react';
import PrimaryComponent from './primarycomponent/PrimaryComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addBuilderProductToCart } from '../../redux/features/products/productsSlice';
import { toast } from 'react-toastify';
import { MdShoppingCart } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { AiFillPrinter } from 'react-icons/ai';

const PcBuilder = () => {
  const dispatch = useDispatch();
  const { buildComponents } = useSelector((state) => state.products);
  console.log(buildComponents);

  const totalPrice = Object.values(buildComponents).reduce(
    (accumulator, product) => {
      const regularPrice = parseFloat(
        product?.additionalDetails?.regularPrice.replace(/[^0-9.]/g, ''),
      );
      if (!isNaN(regularPrice)) {
        return accumulator + regularPrice;
      }
      return accumulator;
    },
    0,
  );

  console.log(totalPrice);

  const handleAddToCart = (e, components) => {
    e.preventDefault();
    console.log(components);
    if (!components?.processor?.uuid) {
      toast.warning('select components first');
    } else {
      dispatch(addBuilderProductToCart(components));
      toast.success('components Added to Cart successfully');
    }
  };
  const [product, setProduct] = useState({
    coreComponents: [
      {
        name: 'processor',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp',
      },
      {
        name: 'motherboard',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/motherboard-48x48.webp',
      },
      {
        name: 'graphics-card',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/graphic-card-48x48.webp',
      },
      {
        name: 'cpu-cooler',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cooler-48x48.webp',
      },
      {
        name: 'ram-1',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/memory-48x48.webp',
      },
      {
        name: 'ram-2',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ram-48x48.webp',
      },
      {
        name: 'ssd',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ssd-drive-48x48.webp',
      },
      {
        name: 'hdd',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/hdd-48x48.webp',
      },
      {
        name: 'power-supply',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/power-supply-48x48.webp',
      },
      {
        name: 'casing',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/computer-case-48x48.webp',
      },
    ],
    others: [
      {
        name: 'monitor',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp',
      },
      {
        name: 'case-fan',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/fan-48x48.webp',
      },
      {
        name: 'ups',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ups2-48x48.webp',
      },
    ],
    accessories: [
      {
        name: 'mouse',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/mouse-48x48.webp',
      },
      {
        name: 'keyboard',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/keyboard-48x48.webp',
      },
      {
        name: 'headphones',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/headphones-48x48.webp',
      },
      {
        name: 'anti-virus',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/antivirus-48x48.webp',
      },
    ],
  });

  const printPc = () => {
    // Open a new tab/window with the URL of the PDF generation component
    const newTab = window.open('/print-pc', '_blank');

    // Check if the new tab has loaded (you may need to adjust the timing)
    newTab.onload = () => {
      // Use JavaScript to trigger the print dialog in the new tab
      newTab.print();
    };
  };

  return (
    <div className='container mx-auto border  border-orange-500 min-h-screen my-4'>
      <div className='builder-header flex flex-col sm:flex-row justify-between border border-orange-500 p-5'>
        <h1 className='text-orange-600 text-xl sm:text-2xl font-bold mb-2 sm:mb-0'>
          Pc-Builder
        </h1>
        <div className='flex gap-4'>
          <ul className='flex gap-2 sm:gap-4 '>
            <li>
              <button
                onClick={(e) => handleAddToCart(e, buildComponents)}
                className='hover:bg-green-600 bg-orange-600 py-1 px-2 text-white rounded-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-md lg:text-lg'>
                <MdShoppingCart size={20} /> Add to Cart
              </button>
            </li>
            <li>
              <button className='hover:bg-green-600 bg-orange-600 py-1 px-2 text-white rounded-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-md lg:text-lg'>
                <BiSave size={20} /> Save PC
              </button>
            </li>
            <li>
              <button
                className='hover:bg-green-600 bg-orange-600 py-1 px-2 text-white rounded-md flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-md lg:text-lg'
                onClick={printPc}>
                <AiFillPrinter size={20} /> Print
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='builder-content mx-5 p-3 md:mx-20 my-10 '>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between my-5'>
          <div className='w-full md:w-3/4'>
            <h2 className='text-orange-400 font-bold text-lg md:text-xl lg:text-2xl'>
              pc-builder || Build Your own Computer
            </h2>
            <div className='flex gap-4'>
              <input type='checkbox' />
              <span>Hide unconfigured components</span>
            </div>
          </div>
          <div className='w-40  text-center'>
            <div className='bg-orange-600 text-white p-2 rounded-lg'>
              <p className='text-xl font-bold'> {totalPrice} Bdt</p>
              <p className='text-sm'>
                {Object.keys(buildComponents).length} items
              </p>
            </div>
          </div>
        </div>

        <PrimaryComponent
          props={product.coreComponents}
          name={'Core Components'}
        />
        <PrimaryComponent
          props={product?.others}
          name={'PERIPHERALS & OTHERS'}
        />
        <PrimaryComponent props={product?.accessories} name={'Accessories'} />
      </div>
    </div>
  );
};

export default PcBuilder;
