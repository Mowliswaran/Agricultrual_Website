import Explore from '../Explore/Explore'
import Home6 from '../Home6/Home6'
import { useCart } from '../Cart/CartContext'

const Pesicide = () => {
  const { addToCart } = useCart()

    const pesticide_data = [
        { id: 1, title: 'Pormas Sulphur', image: require('../PesticideImage/pest1.jpg'), price: 200 },
        { id: 2, title: 'Activator 90', image: require('../PesticideImage/pest2.jpeg'), price: 450 },
        { id: 3, title: 'Pest Control Concentrate', image: require('../PesticideImage/pest3.jpeg'), price: 180 },
        { id: 4, title: 'Profit', image: require('../PesticideImage/pest4.jpeg'), price: 301 },
        { id: 5, title: 'Diazinon', image: require('../PesticideImage/pest5.jpeg'), price: 355 },
        { id: 6, title: 'Organ Pesticide', image: require('../PesticideImage/pest6.jpeg'), price: 180 },
        { id: 7, title: 'Deltamethrin', image: require('../PesticideImage/pest7.jpeg'), price: 150 },
        { id: 8, title: 'Attack', image: require('../PesticideImage/pest8.jpeg'), price: 460 },
        { id: 9, title: 'Master', image: require('../PesticideImage/pest9.jpeg'), price: 70 },
        { id: 10, title: 'Boscalid', image: require('../PesticideImage/pest10.jpeg'), price: 990 },
        { id: 11, title: 'King Killer', image: require('../PesticideImage/pest11.jpeg'), price: 1800 },
    ]

  return (
    <div>
      <h2 className='seedd'>Pesticides</h2>
      <div className="products-container">
        {pesticide_data.map((item) => (
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
export default Pesicide;