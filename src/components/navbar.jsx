import '../styles/navbar.css'
import navlogo from '../assets/navlogo.png'
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="navbar">
                <div className="logo"><h3 className='gradient-heading-logo'>Sv Prince</h3></div>
                <div className="nav-menu">
                    <ul className="">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar