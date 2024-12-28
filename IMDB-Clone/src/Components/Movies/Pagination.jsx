import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function Pagination({ handleNex, handlePrev, pageNo }) {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-7">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={handlePrev}
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={handleNex}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{''}</span> to <span className="font-medium">{pageNo}</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handlePrev}
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-current="page"
              className={`relative z-10 inline-flex items-center ${
                selectedPage === 1 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              onClick={() => setSelectedPage(1)}
            >
              1
            </a>
            <a
              href="#"
              className={`relative inline-flex items-center ${
                selectedPage === 2 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              } px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0`}
              onClick={() => setSelectedPage(2)}
            >
              2
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className={`relative inline-flex items-center ${
                selectedPage === 9 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              } px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0`}
              onClick={() => setSelectedPage(9)}
            >
              9
            </a>
            <a
              href="#"
              className={`relative inline-flex items-center ${
                selectedPage === 10 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              } px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0`}
              onClick={() => setSelectedPage(10)}
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNex}
            >
              <span className="sr-only">Next</span>
              <FaChevronRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
