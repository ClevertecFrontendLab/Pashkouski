import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createBrowserHistory} from "history";
import {createReduxHistoryContext} from "redux-first-history";
import {appReducer} from "@redux/slices/app.slice.ts";
import {baseApi} from "@redux/api/base-api.ts";


const {
    createReduxHistory,
    routerReducer,
    routerMiddleware
} = createReduxHistoryContext({
    history: createBrowserHistory()
});

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        app: appReducer,
        [baseApi.reducerPath]: baseApi.reducer
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware, routerMiddleware),
});
export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
