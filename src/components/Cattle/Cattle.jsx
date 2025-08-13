import Explore from '../Explore/Explore'
import Home6 from '../Home6/Home6'
import { useCart } from '../Cart/CartContext'

const Cattle = () => {
  const { addToCart } = useCart()

    const cattle_data = [
        { id: 1, title: 'Hand Trowel', image: require('../CattleImage/cattle1.jpeg'), price: 300 },
        { id: 2, title: 'Pickaxe', image: require('../CattleImage/cattle2.jpeg'), price: 410 },
        { id: 3, title: 'Garden Rake', image: require('../CattleImage/cattle3.jpeg'), price: 150 },
        { id: 4, title: 'Sickle', image: require('../CattleImage/cattle4.jpeg'), price: 301 },
        { id: 5, title: 'Shovel', image: require('../CattleImage/cattle5.jpeg'), price: 315 },
        { id: 6, title: 'Watering Can', image: require('../CattleImage/cattle6.jpeg'), price: 180 },
        { id: 7, title: 'Hoe', image: require('../CattleImage/cattle7.jpeg'), price: 1560 },
        { id: 8, title: 'Sickle', image: require('../CattleImage/cattle8.jpeg'), price: 460 },
        { id: 9, title: 'Pick Mattock', image: require('../CattleImage/cattle9.jpeg'), price: 900 },
    ]

  return (
    <div>
      <h2 className='seedd'>Cattle Products</h2>
      <div className="products-container">
        {cattle_data.map((item) => (
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

export default Cattle