import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: "include",
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
});


