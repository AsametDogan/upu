import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authService } from "../services/auth"
import { setLoggedIn, setUser } from "../Stores/User";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const defineUser = async (id) => {
    const response = await authService.FindMe(id);
    dispatch(setUser(response.data))
    dispatch(setLoggedIn())
    console.log(response.data)
  };

  const user = useSelector((state) => state.user.user)
  console.log(user)

  const onSubmit = async data => {
    const response = await authService.SignIn(data);
    var decoded = jwt_decode(response.data.access_token);
    //console.log(response.data.access_token)
    console.log(response)
    console.log(decoded.sub)
    defineUser(decoded.sub)
  };

  return (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-white flex justify-center mt-28">
      <div className="w-[297px] flex flex-col bg-white mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[297px] pb-12 gap-8 border-b border-gray-300 border-solid">
          <div className="w-full flex flex-col items-center gap-5 mb-5 bg-white">
            <h2 className="text-[29px] w-max font-semibold opacity-90">
              upu.task oturum aç
            </h2>
            <p className="text-base opacity-70">Tekrar hoşgeldiniz!</p>
          </div>
          <div className="field">
            <input
              {...register("email")}
              id="email"
              className="text-lg py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6]"
              type="text"
              required
              autoComplete="off"
            />
            <label className="absolute top-2 left-4 text-base opacity-70" htmlFor="email">E-posta</label>
          </div>
          <div className="field">
            <input
              {...register("password")}
              id="password"
              className="text-lg py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6]"
              type="password"
              required
              autoComplete="off"
            />
            <label className="absolute top-2 left-4 text-base opacity-70" htmlFor="password">Şifre</label>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <label className="text-base flex flex-row justify-center gap-[6px] cursor-pointer opacity-90">
              <input type="checkbox" />
              Çevrimiçi kalın
            </label>
            <span className="text-base text-[#6941c6] hover:underline cursor-pointer">
              Unuttun mu?
            </span>
          </div>
          <button type="submit" className="flex items-center justify-center w-full h-12 bg-[#6941c6] text-white text-base font-medium rounded-lg hover:opacity-80 ">

            Oturum aç

          </button>

        </form>
        <div className="mt-8 text-sm flex flex-row leading-6">
          <p className="text-[#2e2e2e]">
            Henüz bir hesabınız yok?
            <NavLink
              to="/sign-in"
              className="ml-1 text-[#6941c6] hover:underline"
            >
              Bir upu.task hesabı oluşturun
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
