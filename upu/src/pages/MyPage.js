import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/List/List";
import MainHeader from "../components/MainHeader/MainHeader";
import MyProfile from "../components/MyProfile";
import UserSettings from "../components/UserSettings/UserSettings";

const MyPage = () => {
  const [currentPage, setCurrentPage] = useState("list");

  const handleChangePage = (event) => {
    setCurrentPage(event.target.id);
  };
  return (
    <>
      <MainHeader />
      <div className=" border-b border-gray-200 overflow-x-auto pr-8 no-scrollbar">
        <ul className="flex flex-nowrap gap-8 sm:gap-3 text-sm pl-6 sm:pl-4  text-gray-600 text-center">
          <li className="">
            <button
              onClick={handleChangePage}
              className={`py-2 rounded-t border-b-2 border-transparent hover:text-gray-700 ${
                currentPage === "list"
                  ? "text-gray-900 font-[500] border-[#6941c6]"
                  : ""
              }`}
              id="list"
            >
              <span onClick={handleChangePage} id="list" className="flex w-max">
                Görevlerim
              </span>
            </button>
          </li>
          <li className="flex flex-nowrap">
            <button
              onClick={handleChangePage}
              id="overView"
              className={`py-2 rounded-t border-b-2 border-transparent hover:text-gray-700  ${
                currentPage === "overView"
                  ? "text-gray-900 font-[500] border-[#6941c6]"
                  : ""
              }`}
            >
              <span
                onClick={handleChangePage}
                id="overView"
                className="flex w-max"
              >
                Genel Bakış
              </span>
            </button>
          </li>
        </ul>
      </div>
      {currentPage === "overView" ? (
        <MyProfile />
      ) : (
        <div>
          <List />
        </div>
      )}
      <Routes>
        <Route path="profile_settings/*" element={<UserSettings />} />
      </Routes>
    </>
  );
};

export default MyPage;
