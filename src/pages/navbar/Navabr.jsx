import { Link } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi';
import { BiSolidOffer } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
const Navabr = () => {
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
          <div>
            <input
              type='text'
              placeholder='Search'
              className='px-2 py-1  rounded-lg border border-gray-300 focus:outline-none '
            />
          </div>

          {/* Menu Items */}
          <div className='flex space-x-10 justify-center align-center'>
            <div className='flex justify-center align-center gap-5'>
              <BiSolidOffer className='text-orange-700' size={32} />
              <div>
                <Link to='/offer'>
                  <p className='text-2xl'>Offer</p>
                </Link>
              </div>
            </div>
            <div className='flex justify-center align-center gap-5'>
              <GiElectric className='text-orange-700' size={32} />
              <div>
                <Link to='/gadgets'>
                  <p className='text-2xl'>Gadget</p>
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
            <Link to='/pc-builder'>
              <button className='bg-orange-500 text-white px-4 py-2 rounded-lg'>
                PC-Builder
              </button>
            </Link>
          </div>
        </nav>

        <div className='categories-menu bg-white p-4 shadow-md mx-auto'>
          <div className='container   mx-auto'>
            <ul className='text-black flex justify-between gap-3'>
              <Link to='/laptop'>
                <li>Laptop</li>
              </Link>
              <Link to='/components'>
                <li>Component</li>
              </Link>

              <Link to='/mobile'>
                <li>Phone</li>
              </Link>
              <Link to='/ups'>
                <li>Ups</li>
              </Link>

              <Link to='/tablet'>
                <li>Tablet</li>
              </Link>
              <Link to='/office-equipment'>
                <li>Office Equipment</li>
              </Link>
             
              <Link to='/camera'>
                <li>Camera</li>
              </Link>
              
              <Link to='/network'>
                <li>Networking</li>
              </Link>
              <Link to='/software'>
                <li>Software</li>
              </Link>
              <Link to='/server-networking'>
                <li>Server</li>
              </Link>
              <Link to='/accessories'>
                <li>Accessories</li>
              </Link>
              <Link to='/gadget'>
                <li>Gadget</li>
              </Link>
              <Link to='/gaming'>
                <li>Gaming</li>
              </Link>
      
              <Link to='/television'>
                <li>Television</li>
              </Link>
              <Link to='/air-conditioner'>
                <li>Ac</li>
              </Link>
      
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabr;
