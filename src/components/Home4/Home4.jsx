import './Home4.css';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home4 = () => {
    const navigate = useNavigate();

  return (
    <div className='mm'>
      <div className='overlap'>
        <div className='agri'>
          Agrimix
        </div>
      </div>

      <div className='list_name'>
        <div className='product_name'>Products</div>
        <ul>
          <li><Link to="/seeds">Seeds</Link></li>
          <li><Link to="/Fertiliser">Fertilisers</Link></li>
          <li><Link to="/Pesicide">Pesticides</Link></li>
          <li><Link to="/Cattle">Cattle Products</Link></li>
          <li><Link to="/Farmtools">Farming Tools</Link></li>
        </ul>
      </div>

      <div className='contact_section'>
        <div className='product_name'>Contact Us</div>
        <div className='kk'>
          MOWLISWARAN C<br />
          AGRIMIX<br />
          NO 5 RAGAVENDIRA NAGAR<br />
          [RI OFFICE BACKSIDE]<br />
          VALAVANUR - 605108<br />
          VILLUPURAM
        </div>

        <div className='iconns'>
          <a href="https://www.facebook.com/profile.php?id=61577204993296" target="_blank" rel="noreferrer" title="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/m2_coin_collection/" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="tel:+916374946804" title="Call Us">
            <HiPhone />
          </a>
          <a href="mailto:mowliswaranchinnusamy@gmail.com?subject=Product%20Enquiry&body=Hi%2C%20I%20am%20interested%20in%20your%20products." title="Email Us">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home4;
