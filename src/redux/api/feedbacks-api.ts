import {baseApi, getToken} from "@redux/api/base-api.ts";
import {isLoadingReducer} from "@redux/slices/app.slice.ts";
import {GetFeedbackType} from "@redux/api/feedbacks-api-type.ts";


export const feedbacksApi = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getFeedback: builder.query({
                query: () => ({
                    url: '/feedback',
                    method: 'GET',
                    credentials: 'include',
                    headers: {authorization: `Bearer ${getToken()}`}
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
            sendFeedback: builder.mutation({
                query: (body: GetFeedbackType) => ({
                    url: '/feedback',
                    method: 'POST',
                    credentials: 'include',
                    headers: {authorization: `Bearer ${getToken()}`},
                    body
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
        }
    },
})




export const { useLazyGetFeedbackQuery, useGetFeedbackQuery, useSendFeedbackMutation } = feedbacksApi

