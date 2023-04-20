import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://643d1d456afd66da6aed0244.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContacts: builder.mutation({
      query: item => ({
        url: `/contacts`,
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useAddContactsMutation,
  useFetchContactsQuery,
  useDeleteContactsMutation,
} = contactApi;
