import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '2ceb5c43acmsh57ed432ef277557p1f59fajsn9b8e47313380',
};
const baseUrl = ' https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders,
});
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        }),
    }),
});
export const { useGetCryptosQuery } = cryptoApi;
