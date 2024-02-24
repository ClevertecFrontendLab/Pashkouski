import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {history, store} from '@redux/configure-store';

import 'normalize.css';
import './index.css';

import {HistoryRouter} from "redux-first-history/rr6";
import {Routers} from "@constants/navigation/routers.tsx";
import {Loader} from "@shared/loader/loader.tsx";


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


root.render(
    <Provider store={store}>
        <HistoryRouter history={history}>
            <Routers />
            <Loader />
        </HistoryRouter>
    </Provider>
);
