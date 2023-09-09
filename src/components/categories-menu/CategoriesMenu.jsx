import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesMenu = () => {
  return (
    <div className='categories-menu bg-white p-4 shadow-md mx-auto '>
      <div className='container mx-auto'>
        <ul className='text-black flex justify-around flex-wrap gap-3'>
          <Link to='/laptop'>
            <li>Laptop</li>
          </Link>
          <Link to='/desktops'>
            <li>Desktop</li>
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
          <Link to='/security-camera'>
            <li>Security Camera</li>
          </Link>

          <Link to='/networking'>
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
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesMenu;
