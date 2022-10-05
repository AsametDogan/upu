import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `/login`
    }),
    endpoints:(build)=>({
        createUser:build.mutation<>
    })
});