import './Seeds.css';
import { useCart } from '../Cart/CartContext';
import Explore from '../Explore/Explore';
import Home6 from '../Home6/Home6';



const Seeds = () => {
  const { addToCart } = useCart();

  const seeds_data = [
    { id: 1, title: 'Beet Root', image: require('../SeedsImage/beetroot.jpeg') , price: 30},
    { id: 2, title: 'Bitter Gourd', image: require('../SeedsImage/bittergaurd.jpg') , price: 40},
    { id: 3, title: 'Bottle Gourd', image: require('../SeedsImage/bottleguard.jpg') , price: 50},
    { id: 4, title: 'Brinjal', image: require('../SeedsImage/brinjal.jpeg') , price: 30},
    { id: 5, title: 'Carrot', image: require('../SeedsImage/carrot.jpeg') , price: 35},
    { id: 6, title: 'Corn', image: require('../SeedsImage/corn.jpg') , price: 80},
    { id: 7, title: 'Cucumber', image: require('../SeedsImage/cucumber.jpg') , price: 60},
    { id: 8, title: 'Ginger', image: require('../SeedsImage/ginger.jpg') , price: 46},
    { id: 9, title: 'Ground Nut', image: require('../SeedsImage/groundnut.jpeg') , price: 90},
    { id: 10, title: 'Onion', image: require('../SeedsImage/onion.jpg') , price: 300},
    { id: 11, title: 'Paddy', image: require('../SeedsImage/paddy.jpg') , price: 30},
    { id: 12, title: 'Radish', image: require('../SeedsImage/raddish.jpg') , price: 50},
    { id: 13, title: 'Snake Gourd', image: require('../SeedsImage/snakegaurd.jpg') , price: 90},
    { id: 14, title: 'Sunflower', image: require('../SeedsImage/sunflower.jpeg') , price: 65},
    { id: 15, title: 'Tomato', image: require('../SeedsImage/tomato.jpeg') , price: 30},
    { id: 16, title: 'Turmeric', image: require('../SeedsImage/turmeric.jpeg') , price: 30},
  ];

  return (
    <div>
      <h2 className='seedd'>Seeds</h2>
      <div className="products-container">
        {seeds_data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h3>{item.title}</h3>
            <p>Rs. {item.price}.00</p>
            <button
              className="add-btn"
              onClick={() => addToCart({ ...item, quantity: 1 , price: item.price})}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
        <div className='explore'>
          Explore more products...
        </div>
      <Explore/>
      <Home6/>
    </div>
  );
};

export default Seeds;
