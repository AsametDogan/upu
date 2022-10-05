import React from "react";
import Image from "../images/Cross-platform software.gif";
import { NavLink, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-in" element={<SignupPage />} />
      </Routes>
      <div className="mt-8 h-[80%] w-full flex items-center flex-row py-0 px-[15%] gap-12 2xl:mt-6 2xl:px-[12%] lg:mt-4 lg:px-[5%] md:justify-center md:m-0 md:gap-0 md:p-0">
        <div className="flex flex-col w-[50%] py-0 px-5 gap-8 md:w-[90%] md:px-[5%] md:gap-8">
          <h1 className="text-6xl my-5 mx-0 font-semibold text-[#181d25] leading-tight 2xl:text-5xl 2xl:leading-tight lg:text-[40px]">
            Hayal Et. Planla. Başar.
          </h1>
          <p className="text-2xl text-[#181d25] mt-1 leading-[1.38em] 2xl:text-[19px] lg:text-base">
            upu.<span className="text-[#6941c6]">task</span>, ekiplere daha
            yüksek hayaller kurma, potansiyelin ötesine geçme, ekip üyelerini
            bir araya getirme ve başarıyı kutlama konusunda ilham verir.
          </p>
          <NavLink
            to="sign-in"
            className="flex items-center justify-center h-12 w-56 text-white bg-[#6941c6] text-lg font-medium rounded-lg mt-3 hover:opacity-80 2xl:text-sm 2xl:h-[38px] 2xl:w-[187px] lg:text-[13px] lg:h-[38px] lg:w-[168px] md:h-[40px] md:w-[97%] md:mt-4"
          >
            Başlayın - Ücretsiz!
          </NavLink>
        </div>
        <div className="w-[50%] md:hidden flex justify-center">
          <img
            src={Image}
            alt=""
            className="w-[532px] h-[519px] 2xl:w-[449px] 2xl:h-[440px] lg:w-[359px] lg:h-[360px] md:hidden"
          />
        </div>
      </div>
      
    </>
  );
};

export default Home;
