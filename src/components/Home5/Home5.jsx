import './Home5.css';
import { Link } from 'react-router-dom';

const data = [
  { title: 'Seeds', image: require('../Images/seeds.jpg'), path: '/seeds' },
  { title: 'Fertilisers', image: require('../Images/fertilisers.jpg'), path: '/fertiliser' },
  { title: 'Pesticides', image: require('../Images/pesticides.jpg'), path: '/Pesicide' },
  { title: 'Cattle Products', image: require('../Images/cattle.jpg'), path: '/Cattle' },
  { title: 'Farming Tools', image: require('../Images/tools.jpg'), path: '/Farmtools' },
];

const Home5 = () => {
  return (
    <div id='categories'>
      <div className='cat'>Categories</div>
      <div className="category-container">
        {data.map((item, index) => (
          <Link to={item.path} key={index} className="aa" style={{ textDecoration: 'none' }}>
            <div className="category-card">
              <img src={item.image} alt={item.title} className="category-image" />
            </div>
            <div className="category-title">{item.title}</div>
          </Link>
        ))}
      </div>
      <div className="prodsection2">
        <hr className="sec-line3" />
      </div>
    </div>
  );
};

export default Home5;
