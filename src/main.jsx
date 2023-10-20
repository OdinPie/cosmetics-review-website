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
import Brand from './Components/Brand.jsx';
import ProductDetail from './Components/ProductDetail.jsx';
import UpdateProduct from './Components/UpdateProduct.jsx';
import Cart from './Components/Cart.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import PrivateRouter from './Components/PrivateRouter.jsx';
import Errorpage from './Components/Errorpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/cart'),
    errorElement: <Errorpage></Errorpage>,
    children : [
      {
          path: "/addproducts",
          element:<PrivateRouter><AddProducts></AddProducts></PrivateRouter> 
        },
        {
          path: "/",
          element: <Banner></Banner>,
          loader: () => fetch('/brand.json')
        },
        {
          path: "/",
          element: <Brands></Brands>,
          
        },
        {
          path: "/brand/:id",
          element: <Brand></Brand>,
          loader: () => fetch('/brand.json')
        },
        {
          path: "/product/:prodid",
          element:<PrivateRouter><ProductDetail></ProductDetail></PrivateRouter> ,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path: "/update/:prodid",
          element:<PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter> ,
          loader: ({params})=>fetch(`http://localhost:5000/product/${params.prodid}`)
        },
        {
          path: '/cart',
          element:<PrivateRouter><Cart></Cart></PrivateRouter> ,
          loader: ()=> fetch('http://localhost:5000/cart')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </AuthProvider>
   
    
  </React.StrictMode>,
)
