import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomer: build.query({
      query: () => "general/customers",
      providesTags: ["Customers"],
    }),
    getGeography: build.query({
      query: () => "client/geographys ",
      providesTags: ["Geography"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductQuery,
  useGetCustomerQuery,
  useGetGeographyQuery,
} = api;
