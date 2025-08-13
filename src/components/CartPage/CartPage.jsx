import { useNavigate } from 'react-router-dom';
import { useCart } from "../Cart/CartContext";
import "./CartPage.css";
import { FaTrash } from "react-icons/fa";


const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // 👈 Added removeFromCart
  const navigate = useNavigate();

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-page">
      <h2 className="h22">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className='hit'>
                  <h3>{item.title}</h3>
                  <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}>
                                <FaTrash size={18} />
                      </button>
                      </div>
                  <div className="arr">
                    <div>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price per unit: ₹{item.price}</p>
                    </div>
                    <div>
                      <p className="bold">
                        Total Price: ₹{item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total-pos">
              <h3>Grand Total: ₹{grandTotal}.00</h3>
            </div>
            <div className="qwer">
              <button
                onClick={() => navigate("/Order", { state: { cartItems, grandTotal } })}
                className="checkout-btn"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
