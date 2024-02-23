import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="navbar">
                <div className="logo"><h3 className='gradient-heading'>Sv Prince</h3></div>
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