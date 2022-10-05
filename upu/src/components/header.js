import React from "react";
import { NavLink } from "react-router-dom";
import UpuLogo from "./UpuLogo";

const Header = () => {
  return (
    <>
      <header className="h-[70px] w-full flex flex-row justify-between items-center px-[13%] py-0 xl:px-[7%] md:px-[2.5%]">
        <NavLink
          to="/"
          className="flex items-center flex-row w-min font-semibold text-[32px] text-[#101828] select-none cursor-pointer md:text-[27px]"
        >
         <UpuLogo />
        </NavLink>
        <div className="h-full flex items-center gap-8 md:gap-3">
          <NavLink
            to="login"
            className="flex items-center justify-center h-[41px] w-[120px] text-sm font-normal rounded-lg text-[#000000cc] cursor-pointer bg-transparent hover:bg-[#0000000d] xl:h-9 xl:w-32 xl:text-[11px] sm:h-[38px] sm:w-[102px] sm:bg-[#6941c6] sm:text-white sm:hover:text-black"
          >
            OTURUM AÇ
          </NavLink>
          <NavLink
            to="sign-in"
            className="flex items-center justify-center h-[41px] w-[163px] text-sm font-normal rounded-lg bg-[#6941c6] text-white cursor-pointer hover:opacity-80 xl:h-9 xl:w-[132px] xl:text-[11px] sm:hidden"
          >
            ÜCRETSİZ KAYDOL
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
