import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink, Route, Routes } from "react-router-dom";
import Labels from "../components/Settings/Labels";
import Members from "../components/Settings/Members";
import Profile from "../components/Settings/Profile";
import TaskStatus from "../components/Settings/TaskStatus";

const SettingsPage = () => {
  const [activePage, setActivePage] = useState()
  const handleSetPage = (event) => {
    setActivePage(event.target.id)
    console.log(event.target.id)
  }
  
  const [settingsInfo] = useState([
    {
      projectName: "proje 1",
      organizationName: "M. Organizasyonu",
    },
  ]);

  return (
    <>
      <div className="absolute w-full h-full left-0 top-0 bg-white ">
        <div className="w-full h-[70px] flex items-center justify-between px-8 border-b border-solid border-gray-200">
          {settingsInfo.map((settInfo) => (
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">{settInfo.organizationName}</span>
              <span className="text-base text-gray-800">{settInfo.projectName}</span>
            </div>
          ))}
          <NavLink to="/upu_task/kanban">
            <GrClose className="text-2xl" />
          </NavLink>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] sm:w-[90%] mt-12 flex flex-row">
            <div className="w-[30%] h-full flex flex-col gap-8">
              <h1 className="text-[28px] font-semibold text-[#181d25]">
                Ayarlar
              </h1>
              <div className="flex flex-col gap-3">
                <span className="max-w-max font-semibold text-[15px] text-gray-700">
                  Genel
                </span>
                <NavLink
                  onClick={handleSetPage}
                  id="profile"
                  to="profile"
                  className={`max-w-max text-[15px] ml-4 ${activePage === "profile"? "text-gray-600":"text-gray-400"}`}
                >
                  Profil
                </NavLink>
                <NavLink
                  onClick={handleSetPage}
                  id="task_status"
                  to="task_status"
                  className={`max-w-max text-[15px] ml-4 ${activePage === "task_status"? "text-gray-600":"text-gray-400"}`}
                >
                  Görev Durumları
                </NavLink>
                <NavLink
                  onClick={handleSetPage}
                  id="labels"
                  to="labels"
                  className={`max-w-max text-[15px] ml-4 ${activePage === "labels"? "text-gray-600":"text-gray-400"}`}
                >
                  Etiketler
                </NavLink>
                <span className="max-w-max font-semibold text-[15px] text-gray-700 mt-3">
                  Üyeler
                </span>
                <NavLink
                  onClick={handleSetPage}
                  id="members"
                  to="members"
                  className={`max-w-max text-[15px] ml-4 ${activePage === "members"? "text-gray-600":"text-gray-400"}`}
                >
                  Üyeler
                </NavLink>
                <span className="max-w-max text-[15px] text-gray-400 ml-4 opacity-50">
                  Dış Ekipler
                </span>
                <span className="max-w-max text-[15px] text-gray-400 ml-4 opacity-50">
                  Paylaşılan Bağlantılar
                </span>
              </div>
            </div>
            <div className="w-[70%] h-full relative flex justify-center mt-14 overflow-y-auto">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/task_status" element={<TaskStatus />} />
                <Route path="/labels" element={<Labels />} />
                <Route path="/members" element={<Members />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
