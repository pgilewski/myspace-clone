import React from 'react';
import { useState } from 'react';

function Main() {
  const [isOnProfile, setIsOnProfile] = useState(false);
  const [isOnToggle, setIsOnToggle] = useState(false);
  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
                <img
                  className='h-8 w-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg'
                  alt='Workflow logo'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-6 '>
                  <a className='px-3 py-2  text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'>
                    Main
                  </a>

                  <a className='px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                    Movies
                  </a>

                  <a className='px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                    Photos
                  </a>

                  <a className='px-3 py-2  text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                    Blog
                  </a>

                  <a className='px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                    Reports
                  </a>
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
                      <img
                        className='h-6 w-6 rounded-full'
                        src='https://eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png'
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
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Your Profile
                      </a>

                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Settings
                      </a>

                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Sign out
                      </a>
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
            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Dashboard
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Team
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Projects
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Calendar
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
            >
              Reports
            </a>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='mt-3 px-2 space-y-1'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Your Profile
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Settings
              </a>

              <a
                link='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 flex'>
          <h1 className='text-3xl leading-tight text-gray-900 mr-2'>
            Main board
          </h1>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='far'
            data-icon='clipboard'
            class='self-center h-8 w-8'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path
              fill='currentColor'
              d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z'
            ></path>
          </svg>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 '>
          <div className='px-4 py-6 sm:px-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
