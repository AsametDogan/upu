import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink, Route, Routes } from "react-router-dom";
import AllOrganizations from "./AllOrganizations";
import Options from "./Options";
import UserProfile from "./UserProfile";

const UserSettings = () => {
  const [activePage, setActivePage] = useState();
  const handleSetPage = (event) => {
    setActivePage(event.target.id);
  };

  return (
    <>
      <div className="absolute w-full h-full left-0 top-0 bg-white ">
        <div className="w-full h-[70px] flex items-center justify-between px-8 border-b border-solid border-gray-200">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Kullanıcı</span>
            <span className="text-base text-gray-800">4545</span>
          </div>
          <NavLink to="/mypage">
            <GrClose className="text-2xl" />
          </NavLink>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] sm:w-[90%] mt-10 flex flex-row">
            <div className="w-[30%] h-full flex flex-col gap-8">
              <h1 className="text-[28px] font-semibold text-[#181d25]">
                Ayarlar
              </h1>
              <div className="flex flex-col gap-3">
                <span className="max-w-max font-semibold text-[15px] text-gray-700">
                  Genel
                </span>
                <NavLink
                  to="user_profile"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Profil
                </NavLink>
                <span className="max-w-max font-semibold text-[15px] text-gray-700 mt-3">
                  Uygulamalar
                </span>
                <span
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 ${
                    activePage === "members" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Yetkili Uygulamalar
                </span>
                <span className="max-w-max font-semibold text-[15px] text-gray-700 mt-3">
                  Abonelikler
                </span>
                <NavLink
                  to="all_organizations"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Tüm Organizasyonlar
                </NavLink>
                <span className="max-w-max font-semibold text-[15px] text-gray-700 mt-3">
                  Seçenekler
                </span>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Temel Öğeler
                </NavLink>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Hatırlatmalar
                </NavLink>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  E-posta Bildirimleri
                </NavLink>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  upu.task'a e-posta gönder
                </NavLink>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Proje Tercihleri
                </NavLink>
                <NavLink
                  to="options"
                  onClick={handleSetPage}
                  className={`max-w-max text-[15px] ml-4 hover:text-gray-900 ${
                    activePage === "profile" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  İleri
                </NavLink>
              </div>
            </div>
            <div className="w-[70%] h-full relative flex justify-center overflow-y-auto">
              <Routes>
                <Route path="/user_profile" element={<UserProfile />} />
                <Route
                  path="/all_organizations"
                  element={<AllOrganizations />}
                />
                <Route path="options" element={<Options />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
