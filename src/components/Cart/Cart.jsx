import "./Cart.css";

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      {/* eslint-disable-next-line react/prop-types */}
      <p>Selected Items: {cart.length}</p>
      <p>total Price: ${totalPrice.toFixed(2)}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
