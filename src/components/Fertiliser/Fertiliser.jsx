import './Fertiliser.css'
import Explore from '../Explore/Explore'
import Home6 from '../Home6/Home6'
import { useCart } from '../Cart/CartContext'

const fertiliser_data = [
  { id: 1, title: 'PUSHP Vermi Compost', image: require('../FertiliserImage/fertiliser1.jpeg'), price: 300 },
  { id: 2, title: 'Shri sai Vermi Compost   ', image: require('../FertiliserImage/fertiliser2.jpeg'), price: 410 },
  { id: 3, title: 'All Purpose Fertiliser', image: require('../FertiliserImage/fertiliser3.jpeg'), price: 150 },
  { id: 4, title: 'Evana Organic Fertiliser [Phosphate]', image: require('../FertiliserImage/fertiliser4.jpeg'), price: 301 },
  { id: 5, title: 'Super BAC 88', image: require('../FertiliserImage/fertiliser5.jpeg'), price: 315 },
  { id: 6, title: 'Orgamic Vermi Compost', image: require('../FertiliserImage/fertiliser7.jpeg'), price: 180 },
  { id: 7, title: 'Gro Green (25 Kg)', image: require('../FertiliserImage/fertiliser8.jpeg'), price: 1560 },
  { id: 8, title: 'Nutri PaK', image: require('../FertiliserImage/fertiliser9.jpg'), price: 460 },
  { id: 9, title: 'AM Mix', image: require('../FertiliserImage/fertiliser10.jpeg'), price: 900 },
]

const Fertiliser = () => {
  const { addToCart } = useCart()

  return (
    <div>
      <h2 className='seedd'>Fertilisers</h2>
      <div className="products-container">
        {fertiliser_data.map((item) => (
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

export default Fertiliser;