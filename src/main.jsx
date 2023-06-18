import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import APropos from './pages/aPropos/APropos.jsx';
import './index.css'
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Error from './pages/error/Error.jsx';
import Logement from './pages/logement/Logement.jsx';


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
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logement/:idLogement" element ={<Logement/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
 
)