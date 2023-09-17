import React, { useEffect, useState } from 'react';
import PrimaryComponent from './primarycomponent/PrimaryComponent';

const PcBuilder = () => {
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
      {
        name: 'anti-virus',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/antivirus-48x48.webp',
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
  console.log(product);

  return (
    <div className='container mx-auto border min-h-screen my-4'>
      <div className='builder-header flex justify-between border-2 p-5'>
        <h1 className='text-orange-600 text-xl font-bold'>Pc-Builder</h1>
        <div className='flex gap-4'>
          <ul className='flex gap-4'>
            <li>add to cart</li>
            <li>Save Pc</li>
            <li>Print</li>
            <li>Screenshot</li>
          </ul>
        </div>
      </div>
      <div className='builder-content mx-5 md:mx-20 my-10'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <div className='w-full md:w-3/4'>
            <h2 className='text-orange-400 font-bold text-lg md:text-xl lg:text-2xl'>
              pc-builder || Build Your own Computer
            </h2>
            <div className='flex gap-4'>
              <input type='checkbox' />
              <span>Hide unconfigured components</span>
            </div>
          </div>
          <div className='w-full md:w-1/4 text-center'>
            <div className='bg-orange-600 text-white p-2 rounded-lg'>
              <p className='text-xl font-bold'>56000</p>
              <p className='text-sm'>4 items</p>
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
