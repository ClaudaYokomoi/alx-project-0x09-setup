import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ALX Listing App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
