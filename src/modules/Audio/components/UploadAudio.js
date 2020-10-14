import React from 'react';

function UploadAudio() {
  return (
    <div class='p-8 items-center '>
      <div class='flex w-full items-center justify-center bg-grey-lighter '>
        <label class='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-600 hover:text-white'>
          <svg
            class='w-8 h-8'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
          </svg>
          <span class='mt-2 text-base leading-normal'>Select a file</span>
          <input type='file' class='hidden' />
        </label>
        {/* Input */}
        <div class='flex flex-col items-center px-4  text-blue-500'>
          <span class=' text-base leading-normal'>
            <label class='block text-gray-700 text-sm ' for=''>
              Audio name
            </label>
            <input
              type='text'
              class='border border-blue-500 rounded-sm text-black text-xs px-1 mb-1'
              label='test'
            />

            <label class='block text-gray-700 text-sm mt-1 ' for='password'>
              Category
            </label>
            <input
              type='text'
              class='border border-blue-500 rounded-sm text-black text-xs px-1'
              label='test'
            />
          </span>
          <input type='file' class='hidden' />
        </div>
      </div>
      <div class='flex items-center justify-center mt-2'>
        <button
          class='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline'
          type='button'
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadAudio;
