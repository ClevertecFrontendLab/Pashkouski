import {baseApi} from "@redux/api/base-api.ts";
import {isLoadingReducer} from "@redux/slices/app.slice.ts";
import {
    ChangePasswordType,
    CheckEmailBodyType, ConfirmEmailType,
    LoginBodyType,
    RegisterBodyType
} from "@redux/api/auth-type.ts";


export const authApi = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            registration: builder.mutation({
                query: (body: RegisterBodyType) => ({
                    url: '/auth/registration',
                    method: 'POST',
                    body: body,
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        dispatch(isLoadingReducer(true));
                        await queryFulfilled;
                        dispatch(isLoadingReducer(false));
                    } catch {
                        dispatch(isLoadingReducer(false));
                    }
                },
            }),
            login: builder.mutation({
                query: (body: LoginBodyType) => ({
                    url: '/auth/login',
                    method: 'POST',
                    body: body,
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        dispatch(isLoadingReducer(true));
                        await queryFulfilled;
                        dispatch(isLoadingReducer(false));
                    } catch {
                        dispatch(isLoadingReducer(false));
                    }
                },
            }),

            checkEmail: builder.mutation({
                query: (body: CheckEmailBodyType) => ({
                    url: '/auth/check-email',
                    method: 'POST',
                    body: body,
                    credentials: 'include'
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        dispatch(isLoadingReducer(true));
                        await queryFulfilled;
                        dispatch(isLoadingReducer(false));
                    } catch {
                        dispatch(isLoadingReducer(false));
                    }
                },
            },),
            confirmEmail: builder.mutation({
                query: (body: ConfirmEmailType) => ({
                    url: '/auth/confirm-email',
                    method: 'POST',
                    body: body,
                    credentials: 'include'
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        dispatch(isLoadingReducer(true));
                        await queryFulfilled;
                        dispatch(isLoadingReducer(false));
                    } catch {
                        dispatch(isLoadingReducer(false));
                    }
                },
            },),
            changePassword: builder.mutation({
                query: (body: ChangePasswordType) => ({
                    url: '/auth/change-password',
                    method: 'POST',
                    body: body,
                    credentials: 'include'
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        dispatch(isLoadingReducer(true));
                        await queryFulfilled;
                        dispatch(isLoadingReducer(false));
                    } catch {
                        dispatch(isLoadingReducer(false));
                    }
                },
            },),
        }
    },
})

export const {
    useRegistrationMutation,
    useLoginMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
    useChangePasswordMutation,
} = authApi

