import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App page="Home" />,
    errorElement: <Error />
  },
  {
    path: '/resume',
    element: <App page="Resume" />
  },
  {
    path: '/sites',
    element: <App page="Sites" />
  },
  {
    path: '/demos',
    element: <App page="Demos" />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);