// transactionSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils";

export const transactionSlice = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTransactionByID: builder.query({
      query: (idUser) => `transactions?id_user=${idUser}`,
    }),
  }),
});

export const { useGetTransactionByIDQuery } = transactionSlice;
export const { reducerPath: transactionApi } = transactionSlice;
