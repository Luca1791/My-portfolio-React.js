
import './Navbar.css'
import Luca from '/logomio.png'
import HamburgerMenu from'../Hamburger/HamburgerMenu.jsx'
function NavBar() {
    return (
        <>
            <nav className='navbar'>
                
                <div className="hea_der">
                    <div className="lo_go">
                        <a href="" className="linLuca">
                        <img src={Luca} className="logoLuca" alt="LucaWeb" />
                        </a>
                    </div>
                </div>
              
                <ul className='menu'>
                    <li><a href="#About">About</a></li>
                    <li><a href="https://wbdesign.netsons.org/project.php" target="_blank" rel="noopener noreferrer">Project</a></li>
                    <li><a href="#Contatti">Contatti</a></li>
                </ul>
                
            </nav>
            <HamburgerMenu></HamburgerMenu>
        </>
      )
}
export default NavBar