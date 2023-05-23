import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider theme={{
                fontFamily: 'Inter',
                fontSizes: {md: '16px'},
            }} withGlobalStyles withNormalizeCSS>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
