import "./Product.css";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
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
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
