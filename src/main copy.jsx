import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import APropos from './pages/aPropos/APropos.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Error from './pages/error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home/>
    ),
  },
  {
    path: "apropos",
    element: <APropos/>,
  },
  {
    path : "*",
    element :<Error/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </>
 
)
