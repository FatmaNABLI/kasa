import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.css'
function Header(){
    return(
        <header>
            <img className ="img-logo" src={logo} alt="logo kasa" />
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/apropos">A propos</NavLink></li>
                </ul>
                
                

            </nav>
           
        </header>
    )

}
export default Header