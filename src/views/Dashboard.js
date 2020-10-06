//
import React from 'react';

function Main() {
  return (
    <div>
      <header className='bg-white shadow'>
        <div className='mx-auto py-4 flex items-center text-center justify-center'>
          <h1 className='text-2xl leading-tight text-gray-900 font-mono '>
            Main board
          </h1>
          {/*           <svg
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
          </svg> */}
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-4  sm:px-6 lg:px-8 border-2 border-gray-200 bg-blue-500 text-gray-300'>
          czemu nie działało wcześniej?
          <div className='px-4 py-6 sm:px-0 text-gray-300  font-mono'>
            teraz już działa gray-300
          </div>
          <input type='color' />
        </div>
      </main>
    </div>
  );
}

export default Main;
