import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DocumentsView() {
  return (
    <div>
      <body class='antialiased font-sans bg-gray-200'>
        <div class='container mx-auto px-4 sm:px-8'>
          <div class='py-8'>
            <div>
              <h2 class='text-2xl font-semibold leading-tight'>Files</h2>
            </div>
            <div class='my-2 flex sm:flex-row flex-col justify-between'>
              <div class='flex flex-row mb-1 sm:mb-0'>
                <div class='relative'>
                  <select class='appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      class='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
                <div class='relative'>
                  <select class='appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500'>
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      class='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
                <div class='block relative'>
                  <span class='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
                    <svg
                      viewBox='0 0 24 24'
                      class='h-4 w-4 fill-current text-gray-500'
                    >
                      <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                    </svg>
                  </span>
                  <input
                    placeholder='Search'
                    class='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                  />
                </div>
              </div>

              <div class='block relative'>
                <button class='float-right h-full rounded border border-gray-400 border-b block px-4 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'>
                  Upload
                </button>
              </div>
            </div>
            <div class='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div class='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table class='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Files
                      </th>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Extension
                      </th>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Created at
                      </th>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                        Autor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex items-center'>
                          <div class='flex-shrink-0 w-6 h-8'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='far'
                              data-icon='file'
                              class='svg-inline--fa fa-file fa-w-12'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 384 512'
                            >
                              <path
                                fill='currentColor'
                                d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z'
                              ></path>
                            </svg>
                          </div>
                          <div class='ml-3'>
                            <p class='text-gray-900 whitespace-no-wrap'>
                              Młoda polska - podsumowanie epoki
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>.pdf</p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>Admin</p>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex items-center'>
                          <div class='flex-shrink-0 w-6 h-6'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='far'
                              data-icon='file'
                              class='svg-inline--fa fa-file fa-w-12'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 384 512'
                            >
                              <path
                                fill='currentColor'
                                d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z'
                              ></path>
                            </svg>
                          </div>
                          <div class='ml-3'>
                            <p class='text-gray-900 whitespace-no-wrap'>
                              Wet hands - guitar ver.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>.tab</p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Jan 01, 2020
                        </p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Anonymous
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex items-center'>
                          <div class='flex-shrink-0 w-6 h-6'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='far'
                              data-icon='file'
                              class='svg-inline--fa fa-file fa-w-12'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 384 512'
                            >
                              <path
                                fill='currentColor'
                                d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z'
                              ></path>
                            </svg>
                          </div>
                          <div class='ml-3'>
                            <p class='text-gray-900 whitespace-no-wrap'>
                              Python - notatki
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>.pdf</p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Jan 10, 2020
                        </p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Przemek G.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <div class='flex items-center'>
                          <div class='flex-shrink-0 w-6 h-6'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='far'
                              data-icon='file'
                              class='svg-inline--fa fa-file fa-w-12'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 384 512'
                            >
                              <path
                                fill='currentColor'
                                d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z'
                              ></path>
                            </svg>
                          </div>
                          <div class='ml-3'>
                            <p class='text-gray-900 whitespace-no-wrap'>
                              Mysql - notatki
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>.pdf</p>
                      </td>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          Jan 18, 2020
                        </p>
                      </td>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>User_1</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          '>
                  <span class='text-xs xs:text-sm text-gray-900'>
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div class='inline-flex mt-2 xs:mt-0'>
                    <button class='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l'>
                      Prev
                    </button>
                    <button class='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
