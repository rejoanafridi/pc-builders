import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../redux/features/products/productsSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const { productCart } = useSelector((state) => state.products);
  console.log(productCart);
  // Calculate Subtotal

  const handleRemoveItem = (e, productId) => {
    e.preventDefault();
    dispatch(removeCartItem(productId));
    toast.success('Product Removed form cart');
  };
  const calculateSubtotal = () => {
    let subtotal = 0;
    productCart.forEach((product) => {
      const priceWithoutSymbol = product.unitPrice.replace(/[^\d]/g, '');
      const priceInInteger = parseInt(priceWithoutSymbol, 10);
      subtotal += product.quantity * priceInInteger;
    });
    return subtotal;
  };

  // Calculate VAT (assuming 10% VAT)
  const calculateVAT = () => {
    const subtotal = calculateSubtotal();
    return 0.1 * subtotal;
  };

  // Define your discount value (adjust as needed)
  const discount = 20;

  // Calculate Total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const vat = calculateVAT();
    const total = subtotal + vat - discount;
    return total;
  };
  return (
    <section>
      <div className='mx-auto container px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-5xl'>
          <header className='text-center'>
            <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Your Cart
            </h1>
          </header>

          <div className='mt-8'>
            <ul className='space-y-4'>
              {productCart?.map((product) => {
                const priceWithoutSymbol = product?.unitPrice.replace(
                  /[^\d]/g,
                  '',
                ); // Remove non-numeric characters
                const priceInInteger = parseInt(priceWithoutSymbol, 10);
                console.log(priceInInteger);
                return (
                  <React.Fragment key={product.id}>
                    <li className='flex items-center gap-4'>
                      <img
                        src={product.productImage}
                        alt=''
                        className='h-16 w-16 rounded object-cover'
                      />

                      <div>
                        <h3 className='text-sm text-gray-900'>
                          {product.productName}
                        </h3>
                      </div>
                      <div>
                        Price{' '}
                        <span className='text-orange-500'>
                          {' '}
                          {product.unitPrice}
                        </span>
                      </div>
                      <div className='flex flex-1 items-center justify-end gap-2'>
                        <form>
                          <label htmlFor='Line3Qty' className='sr-only'>
                            {' '}
                            Quantity{' '}
                          </label>

                          <input
                            type='number'
                            min='1'
                            value={product.quantity}
                            id='Line3Qty'
                            className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                          />
                        </form>

                        <button
                          className='text-gray-600 transition hover:text-red-600'
                          onClick={(e) => handleRemoveItem(e, product.id)}>
                          <span className='sr-only'>Remove item</span>
                          <RiDeleteBin6Line size={25} />
                        </button>
                        <div>
                          Total{' '}
                          <span>{product?.quantity * priceInInteger}</span>
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>

            <div className='mt-8 flex justify-end border-t border-gray-100 pt-8'>
              <div className='w-screen max-w-lg space-y-4'>
                <dl className='space-y-0.5 text-sm text-gray-700'>
                  <div className='flex justify-between'>
                    <dt>Subtotal</dt>
                    <dd>BDT {calculateSubtotal()}</dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt>VAT</dt>
                    <dd>BDT {calculateVAT()}</dd>
                  </div>
                </dl>

                <div className='flex justify-end'>
                  <span className='inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700'>
                    <p className='whitespace-nowrap text-xs'>
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className='flex justify-end'>
                  <a
                    href='#'
                    className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'>
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
