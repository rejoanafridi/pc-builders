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

  return (
    <div className='py-8'>
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-4'>
          Featured Products
        </h1>
        <p className='text-xs sm:text-sm'>Check & Get Your Desired Product!</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-4 p-4'>
          {products.map((product, index) => (
            <div
              key={index}
              className='shadow-xl transition bg-white p-4 rounded-lg flex flex-col gap-2 justify-center items-center hover:bg-orange-200 hover:font-bold cursor-pointer'>
              <Link to={`/${createSlug(product.name)}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={100}
                  className='max-w-full h-auto mx-auto'
                />
                <p className='text-sm'>{product.name}</p>
                <div className='text-orange-600 font-bold'>
                  <p className='text-sm'>{product.price}</p>
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
