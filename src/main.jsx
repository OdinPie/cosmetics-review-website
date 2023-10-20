import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProducts from './Components/AddProducts.jsx';
import Banner from './Components/Banner.jsx';
import Brands from './Components/Brands.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
          path: "/addproducts",
          element: <AddProducts></AddProducts>
        },
        {
          path: "/",
          element: <Banner></Banner>,
          loader: () => fetch('/brand.json')
        },
        {
          path: "/",
          element: <Brands></Brands>,
          
        }
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </React.StrictMode>,
)
