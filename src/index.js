import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MainPage from './pages/MainPage/MainPage';
import {Provider} from "react-redux"
import { store } from './Features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);

