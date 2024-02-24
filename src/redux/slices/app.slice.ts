import { createSlice} from "@reduxjs/toolkit";
import {store} from "@redux/configure-store.ts";


const slice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
    },
    reducers: {
        isLoadingReducer: (state, action) => {
            state.isLoading = action.payload;
        },
    },
})


export const appReducer = slice.reducer
export const { isLoadingReducer } = slice.actions



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

