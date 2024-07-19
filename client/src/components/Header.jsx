import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/images/CubikGalleryLogo.png";
import { CartContext } from "../context/CartContext";
import "../styles/Header.css";

const BASE_URL = import.meta.env.VITE_API_URL;

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const toggleCart = () => setShowCart(prevShowCart => !prevShowCart);

  const getTotalPrice = () => 
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <header className="header">
      <img src={Logo} alt="CubikGallery Logo" className="logo" />
      <Link to="/" className="header-title">
        CubikGallery
      </Link>
      <nav className="header-nav">
        <Link to="/user" className="nav-link user">
          User
        </Link>
        <Link to="/admin" className="nav-link admin">
          Admin
        </Link>
        <Link to="/creations" className="nav-link">
          Nos créations
        </Link>
        <Link to="/custom" className="nav-link">
          Sur demande
        </Link>
        <button type="button" className="cart-icon-button" onClick={toggleCart} aria-label="Panier">
          <FiShoppingCart className="cart-icon" />
        </button>
        {showCart && (
          <ul className="cart-popup">
            {cart.length === 0 ? (
              <li>Le panier est vide</li>
            ) : (
              <>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img
                      src={`${BASE_URL}/${item.image_url}`}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="desole-yoann">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">{item.price}€</p>
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() => decreaseQuantity(item.name)}
                        aria-label="Diminuer la quantité"
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">x{item.quantity}</p>
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() => increaseQuantity(item.name)}
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
                <li className="cart-summary">
                  <p>Total: {getTotalPrice()}€</p>
                  <Link to="/payment" className="checkout-button">
                    Procéder à l'achat
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
