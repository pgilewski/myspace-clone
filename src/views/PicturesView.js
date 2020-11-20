import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/istockphoto-1047229766-612x612.jpg';

export default function PicturesView() {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <div class='flex justify-center content-center mx-auto items-center mt-4'>
        <input
          onChange={(e) => onChange(e)}
          value={keyword}
          type='text'
          class='font-mono w-1/3 4 py-2 px-2 rounded border border-gray-400 px-4 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none '
          size='16'
        />
        <Link
          to='/pictures/upload'
          className='ml-2 py-2 px-4  rounded border border-gray-400 border-b block px-4 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
        >
          Button
        </Link>
      </div>
      <div className='my-12 px-4 sm:px-6 lg:px-8'>
        <div class=''>
          <div class='grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-12 mx-12'>
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
            <img
              src={photo}
              alt='test'
              className='border border-gray-400 rounded-md shadow-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
