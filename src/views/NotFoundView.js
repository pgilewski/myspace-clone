// Just an inprogress greeting styled component

import React from 'react';

function InProgress() {
  const style = {
    footer: {
      fontSize: '0.4em',
      position: 'absolute',
      bottom: '0',
      right: '0',
      margin: '0.5em 1em',
    },
    p: {
      marginTop: '1em',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <div className='min-h-screen ' backgroundColor='bg-gray-800'>
      <div className='justify-center align-middle' verticalAlign='center'>
        <div className='flex flex-col items-center'>
          <div className=''></div>
          <h1 className='text-3xl leading-tight text-gray-900 mr-2 mt-4'>
            <div className=''>This page is in progress ツ</div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default InProgress;
