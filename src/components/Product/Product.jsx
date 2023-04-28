import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Product = ({ product, handleAddToCart }) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: ${seller}</p>
        <p>Ratings: ${ratings} Stars</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <span className="add-to-cart">Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
