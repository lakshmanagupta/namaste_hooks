import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import UseMemoComp from './UseMemoComp';
import UseRefComp from './UseRefComp'
import UseHoisting from './useHoisting';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return <>
    <App /><Outlet />
  </>
}
const routerConfig = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    { path: "/useMemo", element: <UseMemoComp /> },
    { path: "/useRef", element: <UseRefComp /> },
    { path: "/useHoisting", element: <UseHoisting /> },
  ]
}])
root.render(<RouterProvider router={routerConfig} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
