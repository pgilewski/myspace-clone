import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/AppRouter';

import NavbarLink from '../components/NavbarLink';

function Navbar() {
  const [isOnProfile, setIsOnProfile] = useState(false);
  const [isOnToggle, setIsOnToggle] = useState(false);

  const links = routes.map((route) => {
    return <NavbarLink route={route} />;
  });

  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
                {/*                 <img
                  className='h-8 w-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg'
                  alt=''
                /> */}
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-6 '>
                  {links}
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  className='p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700'
                  aria-label='Notifications'
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>

                <div className='ml-3 relative'>
                  <div>
                    <button
                      className='max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid'
                      id='user-menu'
                      aria-label='User menu'
                      aria-haspopup='true'
                    >
                      <button
                        className='h-6 w-6 rounded-full'
                        src=''
                        alt=''
                        onClick={() => setIsOnProfile(!isOnProfile)}
                      />
                    </button>
                  </div>
                  <div
                    className={`${
                      isOnProfile ? 'visible' : 'invisible'
                    }  origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
                  >
                    <div
                      className='py-1 rounded-md bg-white shadow-xs '
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu'
                    >
                      {/*                       <Link
                        to=''
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Your Profile
                      </Link>

                      <Link
                        to=''
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Settings
                      </Link> */}

                      <Link
                        to='/login'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => {
                  setIsOnToggle(!isOnToggle);
                }}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
              >
                <svg
                  className={`${isOnToggle ? 'hidden' : 'block'} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`${isOnToggle ? 'block' : 'hidden'} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOnToggle ? 'block' : 'hidden'} md:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to=''
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Dashboard
            </Link>

            <Link
              to=''
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Team
            </Link>

            <Link
              to=''
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Projects
            </Link>

            <Link
              to=''
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Calendar
            </Link>

            <Link
              to=''
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Reports
            </Link>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='mt-3 px-2 space-y-1'>
              {/*               <Link
                to=''
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Your Profile
              </Link>

              <Link
                to=''
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Settings
              </Link>
 */}
              <Link
                to='/login'
                link='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
