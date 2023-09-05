// components/FeaturedCategories.js

import { Link } from 'react-router-dom';
import products from '../../db/featured-products.json';
import slugify from 'slugify';

const FeaturedProducts = () => {
  // Define an array of category objects

  // Function to create URL-friendly slugs
  const createSlug = (text) => {
    return slugify(text, {
      replacement: '-', // Replace spaces with -
      remove: /[*+~.()'"!:@]/g, // Remove characters that are not allowed
      lower: true, // Convert to lowercase
    }).replace(/\//g, '-'); // Replace forward slashes with hyphens
  };

  console.log(products);
  return (
    <div className=' py-8'>
      <div className='container mx-auto text-center'>
        <h1 className='text-3xl font-bold mb-4'>Featured Products</h1>
        <p className='text-sm'>Check & Get Your Desired Product!</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-4 p-8 '>
          {products.map((product, index) => (
            <div
              key={index}
              className='shadow-xl transition  bg-white p-4 rounded-lg flex flex-col gap-2 justify-center items-center hover:bg-orange-200 hover:font-bold cursor-pointer'>
              <Link to={`/${createSlug(product.name)}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={100}
                />
                <p className='text-xs'>{product.name}</p>
                <div className='price text-orange-600 font-bold'>
                  <p>{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
