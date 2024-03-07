// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesListResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

interface Input {
  id?: string;
  limit?: number;
}

// Define a service using a base URL and expected endpoints
export const quotesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),
  reducerPath: "quotesApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Quotes", "Quote"],
  endpoints: (build) => ({
    getQuotes: build.query<QuotesListResponse, number>({
      query: (limit = 10) => `?limit=${limit}`,
      providesTags: (result, error, id) => [{ type: "Quotes" }],
    }),
    getQuoteById: build.query<Quote, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Quote", id: String(id) }], // Sử dụng type "Quote" thay vì "Quotes"
    }),
  }),
});

export const { useGetQuotesQuery, useGetQuoteByIdQuery } = quotesApiSlice;
