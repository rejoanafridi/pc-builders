import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import Loader from '../../utils/loader/Loader';
import { useDispatch } from 'react-redux';
import { addToProductCart } from '../../redux/features/products/productsSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const [findProduct, setFindProduct] = useState({});
  console.log(findProduct);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/allprod.json')
      .then((res) => res.json())

      .then((result) => {
        setProducts(result);
        setTimeout(() => {
          setLoading(false);
        }, 200); //
      });
  }, [productName]);

  const createSlug = (text) => {
    return slugify(text, {
      replacement: '-', // Replace spaces with -
      remove: /[*+~.()'"!:@]/g, // Remove characters that are not allowed
      lower: true, // Convert to lowercase
    }).replace(/\//g, '-'); // Replace forward slashes with hyphens
  };
  useEffect(() => {
    const productFound = products.find(
      (product) => createSlug(product.name) === productName,
    );
    // he
    if (productFound) {
      setFindProduct(productFound);
    }
  }, [products, productName]);

  // related products
  let relatedProducts = products.filter(
    (relatedProduct) => relatedProduct !== findProduct,
  );

  const handleBuyNow = (e, findProduct) => {
    e.preventDefault();
    dispatch(
      addToProductCart({
        id: findProduct.uuid,
        productImage: findProduct.imageUrl,
        productName: findProduct.name,
        productModel: findProduct?.additionalDetails?.keyFeatures[1],
        quantity: quantity,
        unitPrice: findProduct?.additionalDetails?.regularPrice,
      }),
    );
    toast.success('Product Added to card successfully', {
      position: 'top-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  let template;
  if (findProduct) {
    template = (
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 container mx-auto p-5'>
        <div className=' rounded-lg'>
          <img
            src={findProduct.imageUrl}
            height={500}
            width={500}
            alt='image'
          />
        </div>
        <div className=' rounded-lg  lg:col-span-2'>
          <h1 className='text-3xl text-orange-600 font-bold'>
            {findProduct.name}
          </h1>

          <div className='tags flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 my-5'>
            <div className='rounded-full bg-slate-300 px-3 sm:px-4 md:px-5 py-2'>
              <span>Price</span> {findProduct?.additionalDetails?.regularPrice}
            </div>
            <div className='rounded-full bg-slate-300 px-3 sm:px-4 md:px-5 py-2'>
              <span>productCode:</span>{' '}
              {findProduct?.additionalDetails?.productCode}
            </div>
            <div className='rounded-full bg-slate-300 px-3 sm:px-4 md:px-5 py-2'>
              <span></span> {findProduct?.additionalDetails?.status}
            </div>
          </div>

          <div className='key-features'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-bold'> Key Features</h1>
              {findProduct?.additionalDetails?.keyFeatures?.map(
                (features, index) => (
                  <React.Fragment key={index}>
                    <li>{features}</li>
                  </React.Fragment>
                ),
              )}

              <span className='text-orange-500 underline'>View More Info</span>
            </div>

            <div className='my-5'>
              <label htmlFor='Quantity' className='sr-only'>
                {' '}
                Quantity{' '}
              </label>
              {findProduct?.additionalDetails?.status === 'In Stock' ? (
                <>
                  <div className='flex items-center border border-gray-200 rounded w-32'>
                    <button
                      type='button'
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                      className='w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75'>
                      -
                    </button>

                    <input
                      type='number'
                      id='Quantity'
                      value={quantity} // Controlled by state
                      onChange={(e) => setQuantity(e.target.value)} // Update the state on change
                      className='h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                    />

                    <button
                      type='button'
                      onClick={() => setQuantity(quantity + 1)}
                      className='w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75'>
                      +
                    </button>
                  </div>
                  <button
                    className='mt-3 bg-orange-500 text-white px-3 py-2 w-64 hover:bg-orange-400'
                    onClick={(e) => handleBuyNow(e, findProduct)}>
                    Buy now
                  </button>{' '}
                </>
              ) : (
                <div className='w-60 h-10 leading-10 text-center text-white transition  bg-orange-400'>
                  Out Of Stock
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='bg-gray-100'>
        {loading ? (
          <Loader />
        ) : (
          <>
            {template}
            <section className=' container mx-auto'>
              <div className='flex flex-col lg:flex-row lg:space-x-4'>
                <div className='w-full lg:w-4/5 flex flex-col gap-2'>
                  <div className='bg-gray-100 p-4'>
                    <div className='buttons flex flex-wrap gap-3 p-2'>
                      <button className='bg-orange-600 text-white rounded p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
                        Specification
                      </button>
                      <button className='bg-white hover:bg-orange-600 hover:text-white rounded p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
                        Description
                      </button>
                      <button className='bg-white hover:bg-orange-600 hover:text-white rounded p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
                        Question
                      </button>
                    </div>
                  </div>

                  {/* specification */}
                  <div className='bg-white rounded-lg p-5 flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl py-2'> specification</h1>
                    <div className='features'>
                      <h2 className='features-title text-orange-600 font-bold bg-gray-200 p-2 rounded-md'>
                        {' '}
                        Display Features{' '}
                      </h2>
                    </div>
                    {findProduct?.specifications && (
                      <div className='flow-root'>
                        <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                          {Object.entries(findProduct?.specifications).map(
                            ([key, value], index) => (
                              <div
                                key={index}
                                className={`grid grid-cols-1 gap-1 py-3 ${
                                  index % 2 === 0
                                    ? 'even:bg-gray-50'
                                    : 'even:hover:bg-gray-50'
                                } sm:grid-cols-3 sm:gap-4`}>
                                <dt className='font-medium text-gray-900'>
                                  {key}
                                </dt>
                                <dd className='text-gray-700 sm:col-span-2'>
                                  {value}
                                </dd>
                              </div>
                            ),
                          )}
                        </dl>
                      </div>
                    )}
                  </div>
                  <div className='description bg-white p-3 flex flex-col gap-2 rounded-md'>
                    <h1 className='font-bold text-2xl'>Description</h1>
                    <h1 className='font-bold text-2xl'> {findProduct?.name}</h1>
                    <p className=''>{findProduct?.description}</p>
                  </div>
                </div>

                {/* Second Div (20%) */}
                <div className='w-full lg:w-1/5 flex flex-col gap-2 '>
                  <h1 className='text-center font-bold text-xl text-orange-500'>
                    Related Products Details
                  </h1>
                  {relatedProducts.slice(0, 3).map((relatedProduct, id) => (
                    <React.Fragment key={id}>
                      <div className='bg-white p-4 rounded-lg shadow-md flex flex-row items-center'>
                        {/* Product Image */}
                        <div className='w-24 h-24'>
                          <img
                            src={relatedProduct?.imageUrl}
                            alt='image'
                            className='w-full h-full object-cover'
                          />
                        </div>

                        {/* Product Details */}
                        <div className='ml-4 flex-grow'>
                          <h2 className='text-lg font-semibold'>
                            {relatedProduct?.name}
                          </h2>

                          <p className='text-gray-600'>
                            {relatedProduct?.price}
                          </p>

                          <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2'>
                            Compare
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
