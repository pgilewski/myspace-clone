import React, { useState } from 'react';
import photo from '../assets/istockphoto-1047229766-612x612.jpg';

export default function PicturesView() {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <div class='flex justify-center content-center mx-auto items-center'>
        <input
          onChange={(e) => onChange(e)}
          value={keyword}
          type='text'
          class='font-mono py-2 px-2 bg-gray-400 w-2/4 mt-4 rounded border-2 border-blue-800 border-opacity-75'
          size='16'
        />
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
