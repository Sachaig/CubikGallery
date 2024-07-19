import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Payment.css";

function Payment() {
  const { cart } = useContext(CartContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      firstname,
      lastname,
      email,
      items: cart,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setFirstname("");
        setLastname("");
        setEmail("");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="payment-title">Vos informations</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <fieldset className="form-group">
          <label htmlFor="firstname" className="form-label">Prénom:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            className="form-input"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="lastname" className="form-label">Nom:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            className="form-input"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </fieldset>
        <button type="submit" className="submit-button">Valider ma commande</button>
      </form>
      <h2 className="order-title">Ma commande</h2>
      <ul className="order-list">
        {cart.map((item) => (
          <li key={item.id} className="order-item">
            {item.name} - {item.price}€ x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="order-total">Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}€</p>
    </>
  );
};

export default Payment;
