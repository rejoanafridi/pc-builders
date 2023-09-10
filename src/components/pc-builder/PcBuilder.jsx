import React, { useEffect, useState } from 'react';
import PrimaryComponent from './primarycomponent/PrimaryComponent';
import { useSelector } from 'react-redux';

const PcBuilder = () => {
  const addedProducts = useSelector((state) => state.products.addedProducts);

  const [product, setProduct] = useState({
    coreComponents: [
      {
        name: 'processor',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp',
      },
      {
        name: 'Motherboard',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/motherboard-48x48.webp',
      },
      {
        name: 'Graphics Card',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/graphic-card-48x48.webp',
      },
      {
        name: 'Cpu Cooler',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cooler-48x48.webp',
      },
      {
        name: 'RAM-1',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/memory-48x48.webp',
      },
      {
        name: 'RAM-2',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ram-48x48.webp',
      },
      {
        name: 'SSD',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ssd-drive-48x48.webp',
      },
      {
        name: 'HDD',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/hdd-48x48.webp',
      },
      {
        name: 'Power Supply',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/power-supply-48x48.webp',
      },
      {
        name: 'Casing',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/computer-case-48x48.webp',
      },
    ],
    others: [
      {
        name: 'Monitor',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp',
      },
      {
        name: 'Case Fan',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/fan-48x48.webp',
      },
      {
        name: 'UPS',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ups2-48x48.webp',
      },
      {
        name: 'Anti Virus',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/antivirus-48x48.webp',
      },
    ],
    accessories: [
      {
        name: 'Mouse',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/mouse-48x48.webp',
      },
      {
        name: 'Keyboard',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/keyboard-48x48.webp',
      },
      {
        name: 'Headphones',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/headphones-48x48.webp',
      },
      {
        name: 'Anti Virus',
        icon: 'https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/antivirus-48x48.webp',
      },
    ],
  });
  console.log(product);

  useEffect(() => {
    // Use the map function to update coreComponents in an immutable way
    const updatedCoreComponents = product.coreComponents.map((component) => {
      // Check if there is a matching key in addedProducts
      const componentName = component.name.toLowerCase();
      if (addedProducts[componentName]) {
        // Merge data from addedProducts into the current component
        return {
          ...component,
          data: addedProducts[componentName],
        };
      }
      // If no match found, return the original component
      return component;
    });

    // Create a new product object with the updated coreComponents
    const updatedProduct = {
      ...product,
      coreComponents: updatedCoreComponents,
    };

    // Update the product state with the new object
    setProduct(updatedProduct);
  }, [addedProducts]);

  return (
    <div className='container mx-auto border min-h-screen my-4'>
      <div className='builder-header flex justify-between border-2 p-5'>
        <h1 className='text-orange-600 text-xl font-bold'>Pc-Builder</h1>
        <div className=''>
          <ul className='flex gap-4'>
            <li>add to cart</li>
            <li>Save Pc</li>
            <li>Print</li>
            <li>Screenshot</li>
          </ul>
        </div>
      </div>
      <div className='builder-content mx-5 md:mx-20 my-10 flex flex-col gap-5'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <div>
            <h2 className='text-orange-400 font-bold text-lg md:text-xl lg:text-2xl'>
              pc-builder || Build Your own Computer
            </h2>
            <div className='flex gap-4'>
              <input type='checkbox' />
              <span>Hide unconfigured components</span>
            </div>
          </div>
          <div className='btn w-32 md:w-40 text-center bg-orange-600 text-white p-2'>
            <div className='flex flex-col'>
              <p>56000</p>
              <p>4 item</p>
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
