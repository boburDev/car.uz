import './navbar.css'
import logo from "../../assets/logo.png"
import phone from "../../assets/phone.png"

function Navbar() {
  return (
    <nav>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <a href="#"><b>Products</b></a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Company</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Manufactoring</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Experience</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Contacts</a>
                    </li>
                </ul>
                <div className="contact">
                    <a href="#">
                        <img src={phone} alt="phone"/>
                        + 998 71 999 99 99
                    </a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar