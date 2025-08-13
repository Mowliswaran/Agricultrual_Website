import './Order.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
  const location = useLocation();
  const { cartItems, grandTotal } = location.state || { cartItems: [], grandTotal: 0 };

  const [paymentMethod, setPaymentMethod] = useState('GPay');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed with ${paymentMethod}!\nTotal: ₹${grandTotal}`);
    // Here you can add backend API call for placing order
  };

  return (
    <div className="order-page">
      {/* Left Side: Order Form */}
      <div className="order-form-section">
        <h2 className='hhh'>Delivery Details</h2>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Delivery Address" required></textarea>
          <input type="text" placeholder="City" required></input>
          <input type="text" placeholder="State" required></input>   
          <input type="number" placeholder="Pincode" required></input>    
          <h3>Payment Method</h3>
          <div className="payment-options">
            {['GPay', 'PhonePe', 'Paytm', 'UPI', 'Card', 'NetBanking', 'Cash on Delivery'].map((method) => (
              <label key={method} className={`payment-option ${paymentMethod === method ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method}
              </label>
            ))}
          </div>

          <button type="submit" className="place-order-btn">Confirm & Pay</button>
        </form>
      </div>

      {/* Right Side: Cart Summary */}
      <div className="order-summary-section">
        <h2 className='hhh'>Order Summary</h2>
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.title} x {item.quantity}</span>
                  <span>₹{item.quantity * item.price}</span>
                </li>
              ))}
            </ul>
            <hr />
            <div>
                <div className='alg'>
                <h3 className='fin'>Total </h3>
                <h3 className='fin'>₹{grandTotal}.00</h3>
                </div>
                <div className='alg'>
                <h3 className='fin'>GST </h3>
                <h3 className='fin'>₹{grandTotal/100*2.3}</h3>
                </div>
                <div className='alg'>
                <h3 className='fin'>Platform Fee </h3>
                <h3 className='fin'>₹20</h3>
                </div>
            </div>
            <div className='aligncart'>
                <div className='padding'>
                    <hr/>
                </div>
                <div className='m'> 
                To Pay : ₹{(grandTotal + 20 + (grandTotal * 2.3 / 100)).toFixed(2)}
                </div>
            </div>            
          </>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Order;
