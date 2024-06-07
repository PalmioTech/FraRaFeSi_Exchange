import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUserByEmail: builder.query({
      query: (email) => `users?email=${email}`,
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    updateUserBalance: builder.mutation({
      query: ({ id, newBalance, wallet }) => ({
        url: `users/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ balance: newBalance, wallet: wallet }),
      }),
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useRegisterUserMutation,
  useUpdateUserBalanceMutation,
} = usersApi;
