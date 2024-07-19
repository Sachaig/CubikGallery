import { useState, useEffect } from 'react';
import "../styles/User.css";

function User() {
  const [orders, setOrders] = useState([]);
  const [editOrderId, setEditOrderId] = useState(null);
  const [editableOrder, setEditableOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleEdit = (order) => {
    setEditOrderId(order.id);
    setEditableOrder({ ...order });
  };

  const handleSave = async (orderId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableOrder),
      });

      if (response.ok) {
        setOrders(orders.map(order => (order.id === orderId ? editableOrder : order)));
        setEditOrderId(null);
        setEditableOrder(null);
      } else {
        console.error('Failed to update order');
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setOrders(orders.filter(order => order.id !== orderId));
      } else {
        console.error('Failed to delete order');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableOrder({ ...editableOrder, [name]: value });
  };

  return (
    <>
      <h1>Mes commandes</h1>
      {orders.map(order => (
        <section key={order.id} className="order-item">
          <h2>Commande n° {order.id}</h2>
          {editOrderId === order.id ? (
            <>
              <label>
                Prénom:
                <input
                  type="text"
                  name="firstname"
                  value={editableOrder.firstname}
                  onChange={handleChange}
                />
              </label>
              <label>
                Nom:
                <input
                  type="text"
                  name="lastname"
                  value={editableOrder.lastname}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editableOrder.email}
                  onChange={handleChange}
                />
              </label>
              <button type="button" onClick={() => handleSave(order.id)}>Enregistrer</button>
              <button type="button" onClick={() => setEditOrderId(null)}>Annuler</button>
            </>
          ) : (
            <>
              <p>Prénom: {order.firstname}</p>
              <p>Nom: {order.lastname}</p>
              <p>Email: {order.email}</p>
              <button type="button" onClick={() => handleEdit(order)}>Modifier</button>
            </>
          )}
          <h3>Produits:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id} className="order-product-item">
                {item.product_name} - Quantité: {item.quantity}
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => handleDelete(order.id)}>Supprimer</button>
        </section>
      ))}
    </>
  );
}

export default User;
