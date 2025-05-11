import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import ToastLogo from '../../images/ToastLogo.png';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" className="logo"> <img src={ToastLogo} alt="logo" className='navbar-logo'/></NavLink>
            <NavLink to ="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            <NavLink to ="/library" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Library</NavLink>
            <NavLink to ="/favorites" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Favorites</NavLink>
            <NavLink to ="/browse" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Browse</NavLink>
        </nav>
    )
}

export default NavBar