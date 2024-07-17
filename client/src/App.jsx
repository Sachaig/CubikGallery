import { Outlet, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "./assets/images/CubikGalleryLogo.png";
import BlackLogo from "./assets/images/BlackCubikGalleryLogo.png";
import "./styles/App.css";


function App() {
  return (
    <>
      <header className="header">
        <img src={Logo} alt="CubikGallery Logo" className="logo" />
        <Link to="/" className="header-title">CubikGallery</Link>
        <nav className="header-nav">
          <Link to="/creations" className="nav-link">Nos créations</Link>
          <Link to="/custom" className="nav-link">Sur demande</Link>
          <Link to="/cart" className="nav-link">
            <FiShoppingCart className="cart-icon" />
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer>
      <img src={BlackLogo} alt="CubikGallery Logo" className="logo" />
      <Link to="/" className="footer-title">CubikGallery</Link>
      <ul className="footer-list">
								<li>
									<Link to="/auth/login" className="footer-element">
										Nos créations
									</Link>
								</li>
								<li>
									<Link to="/auth/login" className="footer-element">
										Sur demande
									</Link>
								</li>
							</ul>
      </footer>
    </>
  );
}

export default App;
