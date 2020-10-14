import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarLink = (route) => {
  const { path, label, onNavbar } = route.route;
  const style = {
    isOn:
      'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700',
    isOff:
      'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
  };

  const isMatching = useLocation().pathname === path;
  if (onNavbar) {
    return (
      <Link to={path} className={`${isMatching ? style.isOn : style.isOff} `}>
        {label}
      </Link>
    );
  } else {
    return null;
  }
};

export default NavbarLink;
