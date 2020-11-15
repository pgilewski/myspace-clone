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
          class='font-mono py-2 px-2 bg-gray-400 border-2 border-blue-500 w-2/4 rounded'
          size='16'
        />
        <Link
          to='/pictures/upload'
          className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-blue-800 border-opacity-75'
        >
          Button
        </Link>
      </div>
      <div className='py-12 px-4 sm:px-6 lg:px-8'>
        <div class=''>
          <div class='grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-4 '>
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
            <img src={photo} alt='test' />
          </div>
        </div>
      </div>
    </div>
  );
}
