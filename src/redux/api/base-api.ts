import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: "include",
    }),
    endpoints: () => ({}),
});


