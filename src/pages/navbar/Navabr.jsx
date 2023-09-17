import { Link } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi';
import { BiSolidCartDownload, BiSolidOffer } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import './Navbar.css';
import CategoriesMenu from '../../components/categories-menu/CategoriesMenu';
import Search from '../../utils/search/Search';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { productCart } = useSelector((state) => state.products);
  return (
    <>
      <div className='bg-black text-white'>
        <nav className='container p-4 flex justify-between items-center mx-auto'>
          {/* Logo */}
          <div>
            <Link to='/' className='text-3xl font-bold'>
              PC - Builder
            </Link>
          </div>

          {/* Search Section */}
          <div className='hidden md:block'>
            <Search clickable={true} />
          </div>

          {/* Menu Items (visible on medium and larger screens) */}
          <div className='hidden md:flex space-x-10 justify-center align-center'>
            <div className='flex justify-center align-center gap-5'>
              <BiSolidOffer className='text-orange-700' size={32} />
              <div>
                <Link to='/offer'>
                  <p className='text-2xl'>Offer</p>
                </Link>
              </div>
            </div>

            <div className='flex justify-center align-center my-auto gap-5'>
              <FiUser className='text-orange-700' size={32} />
              <div>
                <Link to='/account/login'>
                  <p className='text-xl'>Account</p>
                </Link>
              </div>
            </div>
          </div>

          {/* PC Builder Button */}
          <div>
            <div className='flex justify-center align-center gap-5'>
              <Link to='/pc-builder'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg'>
                  PC-Builder
                </button>
              </Link>
              <div>
                <Link to='/cart' className='flex'>
                  <BiSolidCartDownload className='text-orange-700' size={32} />
                  <div className='text-orange-500 font-semibold'>{productCart.length}</div>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Categories Menu (hidden by default, shown on mobile) */}
        <div className='categories-menu bg-white p-4 shadow-md mx-auto md:hidden'>
          <div className='container mx-auto text-black flex'>
            <div className='flex justify-center align-center gap-5'>
              <BiSolidOffer className='text-orange-700' size={32} />
              <div>
                <Link to='/offer'>
                  <p className='text-2xl sm:text-sm'>Offer</p>
                </Link>
              </div>
            </div>
            <div className='flex justify-center align-center gap-5'>
              <GiElectric className='text-orange-700' size={32} />
              <div>
                <Link to='/gadgets'>
                  <p className='text-2xl sm:text-sm'>Gadget</p>
                </Link>
              </div>
            </div>
            <div className='flex justify-center align-center my-auto gap-5'>
              <FiUser className='text-orange-700' size={32} />
              <div>
                <Link to='/account/login'>
                  <p className='text-xl sm:text-sm'>Account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <CategoriesMenu />
      </div>
    </>
  );
};

export default Navbar;
