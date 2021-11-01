import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY,
};
const baseUrl = process.env.REACT_APP_CRYPTO_API_BASE_URL;
const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders,
});
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

export const { useGetCryptosQuery, useGetExchangesQuery } = cryptoApi;
