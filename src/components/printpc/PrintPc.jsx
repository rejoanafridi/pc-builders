import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PrintPc = () => {
  const [buildComponents, setBuildComponents] = useState({});

  console.log(buildComponents);
  // const { buildComponents } = useSelector((state) => state.products);
  useEffect(() => {
    const storedData = localStorage.getItem('buildComponents');

    if (storedData) {
      try {
        // Parse the retrieved data into a JavaScript object
        const parsedData = JSON.parse(storedData);

        // Set the parsed data to the local state variable
        setBuildComponents(parsedData);
      } catch (error) {
        // Handle parsing errors, if any
        console.error('Error parsing data from localStorage:', error);
      }
    }
  }, []);
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
  const [data, setData] = useState([
    {
      key: 'Processor',
      name: '',
      price: 0,
    },
    {
      key: 'MotherBoard',
      name: '',
      price: 0,
    },
    {
      key: 'CPU-Cooler',
      name: '',
      price: 0,
    },
    {
      key: 'RAM-1',
      name: '',
      price: 0,
    },
    {
      key: 'SSD',
      name: '',
      price: 0,
    },
    {
      key: 'RAM-2',
      name: '',
      price: 0,
    },
    {
      key: 'HDD',
      name: '',
      price: 0,
    },
    {
      key: 'Graphics-Card',
      name: '',
      price: 0,
    },
    {
      key: 'Power-Supply',
      name: '',
      price: 0,
    },
    {
      key: 'Casing',
      name: '',
      price: 0,
    },
    {
      key: 'Casing-Cooler',
      name: '',
      price: 0,
    },
    {
      key: 'Monitor',
      name: '',
      price: 0,
    },
    {
      key: 'Keyboard',
      name: '',
      price: 0,
    },
    {
      key: 'Mouse',
      name: '',
      price: 0,
    },
    {
      key: 'Headphones',
      name: '',
      price: 0,
    },
    {
      key: 'UPS',
      name: '',
      price: 0,
    },
  ]);
  return (
    <div className='container mx-auto my-5'>
      <h1 className='text-orange-500 text-3xl text-center font-bold p-5'>
        Pc Builder
      </h1>
      <div className='overflow-x-auto'>
        <table className='w-full sm:1/4  md:w-2/4 lg:w-3/4 xl:w-4/5 divide-y-2 divide-gray-900 bg-white text-sm mx-auto border border-gray-900'>
          <thead className='text-left bg-orange-500 '>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-white'>
                Component Name
              </th>

              <th className='whitespace-nowrap px-4 py-2 font-medium text-white'>
                Product Name
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-white'>
                Product Price
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-900'>
            {data.map((item, id) => (
              <React.Fragment key={id}>
                {' '}
                <tr>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                    {item.key}
                  </td>

                  <td className='whitespace-nowrap px-4 py-2 text-xs text-gray-900'>
                    {buildComponents[item.key.toLowerCase()]?.name}
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {' '}
                    {
                      buildComponents[item.key.toLowerCase()]?.additionalDetails
                        ?.regularPrice
                    }
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>

          <tfoot className='text-left '>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-white'></td>
              <td className='whitespace-nowrap px-4 py-2 text-right'>Total</td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                ${totalPrice}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PrintPc;
