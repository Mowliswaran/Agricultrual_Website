import './Navi.css';
import { IoCartOutline } from "react-icons/io5";
import logo from '../Images/Agrimix.jpg';
import { useCart } from '../Cart/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Navi = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      // Navigate to home first
      navigate('/', { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='navi_main'>
      {/* Logo */}
      <div className='navi_logo'>
        <img src={logo} alt="Agrimix Logo" className='navi_logo_img'/>
      </div>

      {/* Navigation Links */}
      <ul>
        <li><span className="navi_link" onClick={() => scrollToSection('home')}>Home</span></li>
        <li><span className="navi_link" onClick={() => scrollToSection('categories')}>Categories</span></li>
        <li><span className="navi_link" onClick={() => scrollToSection('about')}>About Us</span></li>
        <li><span className="navi_link" onClick={() => scrollToSection('contact')}>Contact Us</span></li>
      </ul>

      {/* Cart & Login */}
      <div className='navi_cart'>
        <Link to="/Loginhome" className='navi_login'>Login</Link>
        <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
          <IoCartOutline className="cart_icon" />
          {cartCount > 0 && <span className="cart_badge">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navi;
