import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(
          `coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeperiod}`
        ),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () =>
        createRequest(
          `/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
// const options = {
// 	method: 'GET',
// 	hostname: 'coinranking1.p.rapidapi.com',
// 	port: null,
// 	path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
// 	headers: {
// 		'x-rapidapi-key': '6fe7e99ba5mshbb3acb6849c6f41p1b83bfjsna38e8687472d',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// 	}
// };
