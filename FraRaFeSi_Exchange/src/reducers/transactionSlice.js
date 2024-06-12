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
    updateTransactionByID: builder.mutation({
      query: ({ id, newTransacton }) => ({
        url: `transactions/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactios: newTransacton }),
      }),
    }),
  }),
});

export const { useGetTransactionByIDQuery, useUpdateTransactionByID } =
  transactionSlice;
export const { reducerPath: transactionApi } = transactionSlice;
