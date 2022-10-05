import React from "react";
import { useForm } from "react-hook-form";
import { authService } from "../services/auth";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUser } from "../Stores/User";
import { useSelector } from "react-redux";
const SignupPage = () => {
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
    const response = await authService.SignUp(data);
    var decoded = jwt_decode(response.data.access_token);
    //console.log(response.data.access_token)
    console.log(response)
    console.log(decoded.sub)
    defineUser(decoded.sub)
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center mt-28">
      <div className="w-[297px] flex flex-col bg-white mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[297px] pb-11 gap-8">
          <div className="w-full flex flex-col items-center gap-5 mb-5 bg-white">
            <h2 className="text-[29px] w-max font-semibold opacity-90">
              upu.task'a kaydolun
            </h2>
            <p className="text-base opacity-70">
              Şimdi hesabınızı hazırlayalım!
            </p>
          </div>
          <div className="field">
            <input
              {...register("email")}
              id="email"
              className="text-lg py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6]"
              type="email"
              required
              autoComplete="off"
            />
            <label
              className="absolute top-2 left-4 text-base opacity-70"
              htmlFor="email"
            >
              E-posta
            </label>
          </div>

          <div className="field">

            <input
              {...register("password", { required: true, minLength: 6 })} // hata dönmüyor
              id="password"
              className="text-lg py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6]"
              type="password"
              required
              autoComplete="off"
            />
            <label
              className="absolute top-2 left-4 text-base opacity-70"
              htmlFor="password"
            >
              Yeni parola
            </label>
          </div>
          <button type="submit" className="w-full h-12 bg-[#6941c6] text-white text-center text-base font-medium rounded-lg hover:opacity-80">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
