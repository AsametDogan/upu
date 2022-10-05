import React from "react";

function AddSublistBoard() {
  return (
    <>
      <label className="text-sm font-normal text-gray-600 ">Görevler</label>
      <div className=" border border-gray-200 p-2 rounded">
        <div className="flex items-center justify-between">
          <input
            className="accent-[#6941c6] h-4 w-4 border border-gray-200 rounded-sm bg-white checked:bg-[#6941c6] checked:border-[#6941c6] text-[#6941c6]  transition duration-100 mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="xx"
          />
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className=" pl-8 py-0.5 px-3 w-full text-sm text-gray-800  rounded border border-gray-100 focus:ring-[#6941c6] focus:border-[#6941c6] "
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSublistBoard;
