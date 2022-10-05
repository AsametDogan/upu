import React from "react";
import ProfileRightClick from "../Settings/ProfileRightClick";


const UserProfile = () => {
  const [rightClickMenu, setRightClickMenu] = React.useState(null);

  const handleRightClickMenu = (event) => {
    event.preventDefault();
    setRightClickMenu(
      rightClickMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const rightMenuClose = () => {
    setRightClickMenu(null);
  };

  return (
    <>
      <div className="absolute top-0 left-0 sm:left-auto sm:right-auto w-[90%] h-full flex flex-col gap-6">
        <h1 className="text-xl">Profil</h1>
        <div className="flex flex-col gap-5 pb-36">
          <span className="text-sm text-gray-500">Resim</span>
          <div
            onContextMenu={handleRightClickMenu}
            className="flex items-center justify-center bg-gray-500 w-40 h-40 text-7xl text-white rounded-full cursor-pointer"
          >
            MG
          </div>
          <label className="flex flex-col text-sm gap-3 text-gray-600">
            Adı
            <input
              type="text"
              className="w-[100%] h-8 border border-solid border-gray-300 px-2 rounded-md"
            />
          </label>
          <label className="flex flex-col text-sm gap-3 text-gray-600">
            Açıklama
            <textarea
              rows={3}
              className="w-[100%] border border-solid border-gray-300 p-2 rounded-md"
            />
          </label>
          <label className="flex flex-col text-sm gap-3 text-gray-600">
            Şirket
            <input
              type="text"
              className="w-[100%] h-8 border border-solid border-gray-300 px-2 rounded-md"
            />
          </label>
          <label className="flex flex-col text-sm gap-3 text-gray-600">
            Website
            <input
              type="text"
              className="w-[100%] h-8 border border-solid border-gray-300 px-2 rounded-md"
            />
          </label>
          <label className="flex flex-col text-sm gap-3 text-gray-600">
            Profil URL
            <div className="flex flex-row items-center gap-2">
              <p>https://quire.io/w/</p>
              <input
                type="text"
                className="w-[100%] h-8 border border-solid border-gray-300 px-2 rounded-md"
              />
            </div>
          </label>
          <div className="w-[100%] h-8 flex justify-end mt-2">
            <button className="w-24 h-full bg-[#6941C6] text-white rounded-md text-xs hover:opacity-80">
              Kaydet
            </button>
          </div>
        </div>
      </div>
      <ProfileRightClick rightClickMenu={rightClickMenu} rightMenuClose={rightMenuClose} />
    </>
  );
};

export default UserProfile;
