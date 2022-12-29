import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routes/router.routes';
import Setting from './components/setting/Setting';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Setting />
    </Provider>
  </React.StrictMode>
);
