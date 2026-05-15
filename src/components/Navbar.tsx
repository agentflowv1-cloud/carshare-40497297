import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="" className="text-lg font-bold">Home</Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="about" className="hover:text-gray-300">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;