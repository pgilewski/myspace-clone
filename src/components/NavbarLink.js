import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarLink = (route) => {
  const { path, label } = route.route;

  const isMatching = useLocation().pathname === path;
  return (
    <Link
      to={path}
      className={`${
        isMatching
          ? 'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
          : 'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
      } `}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
