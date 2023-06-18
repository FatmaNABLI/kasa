import Home from './pages/home/Home.jsx'
import APropos from './pages/aPropos/APropos.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Error from './pages/error/Error.jsx';
import Logement from './pages/logement/Logement.jsx';

function MyRouter(){
    return(
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
    )

}
export default MyRouter;