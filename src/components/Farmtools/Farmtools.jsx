import Explore from '../Explore/Explore'
import Home6 from '../Home6/Home6'
import { useCart } from '../Cart/CartContext'

const Farmtools = () => {
    const { addToCart } = useCart()

    const farmtools_data = [
        { id: 1, title: 'Hand Trowel', image: require('../FarmToolImage/farm1.jpeg'), price: 300 },
        { id: 2, title: 'Pickaxe', image: require('../FarmToolImage/farm2.jpeg'), price: 410 },
        { id: 3, title: 'Garden Rake', image: require('../FarmToolImage/farm3.jpeg'), price: 150 },
        { id: 4, title: 'Sickle', image: require('../FarmToolImage/farm4.jpeg'), price: 301 },
        { id: 5, title: 'Shovel', image: require('../FarmToolImage/farm5.jpeg'), price: 315 },
        { id: 6, title: 'Watering Can', image: require('../FarmToolImage/farm6.jpeg'), price: 180 },
        { id: 7, title: 'Hoe', image: require('../FarmToolImage/farm7.jpeg'), price: 1560 },
        { id: 8, title: 'Sickle', image: require('../FarmToolImage/farm8.jpeg'), price: 460 },
        { id: 9, title: 'Pick Mattock', image: require('../FarmToolImage/farm9.jpeg'), price: 900 },
        { id: 10, title: 'Billhook', image: require('../FarmToolImage/farm10.jpeg'), price: 990 },
        { id: 11, title: 'Garden Fork (Pitchfork)', image: require('../FarmToolImage/farm11.jpeg'), price: 1900 },
        { id: 12, title: 'Machete', image: require('../FarmToolImage/farm12.jpeg'), price: 800 },
        { id: 13, title: 'Hand Fork', image: require('../FarmToolImage/farm13.jpeg'), price: 980 },
        { id: 14, title: 'Spade', image: require('../FarmToolImage/farm14.jpeg'), price: 200 },
        { id: 15, title: 'Pickaxe', image: require('../FarmToolImage/farm15.jpeg'), price: 100 },
    ]

  return (
    <div>
      <h2 className='seedd'>Farm Tools</h2>
      <div className="products-container">
        {farmtools_data.map((item) => (
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

export default Farmtools