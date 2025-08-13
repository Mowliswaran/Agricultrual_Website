import './Home2.css';
import { FaShieldAlt } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';

const Home2 = () => {
  return (
    <div id='about'>
    <div className="Home2main">
      <div className="Home2head">Agrimix</div>
      
      <div className='Home2c'>
        <div className="Home2cont">
          At AgriMix, we empower farmers, gardeners, and agri-entrepreneurs with easy access to high-quality agricultural products — 
          all under one roof. Our carefully curated catalog includes certified seeds, organic and chemical fertilizers, safe pesticides, 
          animal care products, and advanced farming tools, making AgriMix your go-to agricultural marketplace. AgriMix is one of the
          best places to buy the needed things for the farmers. 
        </div>

        <div className='Home2cont1'>
          AgriMix is an innovative agri-commerce platform committed to empowering farmers and agriculture-based businesses. 
          Our mission is to bridge the gap between producers and consumers by offering a reliable, transparent, and affordable 
          marketplace for agricultural essentials. This helps the farmers to get the seeds and the needed things from their place rather than 
          moving from place to place.
        </div>
      </div>
      
    </div>
    <div className="product-section12">
        <hr className="section-line2" />
      </div>
      <div className='icons'>
      <div className="security-badge">
             <FaShieldAlt className="secure-icon" />
             <span className='qwert'> Secure</span>
        </div>
        <div className="security-badge">
             <FaMedal className="secure-icon" />
             <span className='qwert'> Original</span>
        </div>
        <div className="security-badge">
             <FaHandshake className="secure-icon" />
             <span className='qwert'> Trustable </span>
        </div>
        </div>
        <div className="product-section2">
        <hr className="section-line3" />
      </div>
      </div>
  );
};

export default Home2;
