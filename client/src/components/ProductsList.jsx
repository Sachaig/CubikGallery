import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';

const BASE_URL = import.meta.env.VITE_API_URL;

function ProductsList({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <h1 className="title">Nos créations originales</h1>
      <ul className="creations-list">
        {products.map((product) => (
          <li key={product.name} className="product-item">
            <h1 className="name-list">{product.name}</h1>
            <img
              className="image-list"
              src={`${BASE_URL}/${product.image_url}`}
              alt={`Jeu: ${product.name}`}
            />
            <h2 className="price-list">{product.price}€</h2>
            <button className="buy-button" type="button" onClick={() => addToCart(product)}>
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductsList;

