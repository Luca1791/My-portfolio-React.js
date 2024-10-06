

// const menuIcon = document.querySelector(".hamburger-menu");
// const navbar = document.querySelector(".nav_bar");

// menuIcon.addEventListener("click", () => {
//   navbar.classList.toggle("change");
// });
import { useState } from 'react'
import './HamburgerMenu.css'
import Luca from '/logomio.png'
const HamburgerMenu = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleMenuIconClick = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };
    return (
        <>
    <div className="container">

        <nav className={`nav_bar ${isNavbarVisible ? 'change' : ''}`}>
            <div id='hamburger-menu' className="hamburger-menu" onClick={handleMenuIconClick}>
                <div className="line line-1 "></div>
                <div className="line line-2 "></div>
                <div className="line line-3 "></div>
            </div>
            
            
            <div className="lo_go">
                  <a href="#index" className="linLuca">
                  <img src={Luca} className="logoLuca" alt="LucaWeb" />
                  </a>
            </div>
            


            <ul className="nav-list">
                <li className="nav-item">
                <a href="#About" className="nav-link home">About</a>
                </li>
                <li className="nav-item">
                <a href="https://wbdesign.netsons.org/project.php" target="_blank" rel="noopener noreferrer" className="nav-link">Project</a>
                </li>
                <li className="nav-item">
                    <a href="#Contatti" className="nav-link">Contatti</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link"></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"></a>
                </li>
                <li className="nav-item">
                <a href="" className="nav-link"> </a>
                </li>
            </ul>
        </nav>
    </div>
        </>
      )
}
export default HamburgerMenu;