import './Home1.css';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
  { title: 'Seeds', image: require('../Images/seeds.jpg'), path: '/seeds' },
  { title: 'Fertilisers', image: require('../Images/fertilisers.jpg'), path: '/fertiliser' },
  { title: 'Pesticides', image: require('../Images/pesticides.jpg'), path: '/Pesicides' },
  { title: 'Cattle Products', image: require('../Images/cattle.jpg'), path: '/Cattle' },
  { title: 'Farming Tools', image: require('../Images/tools.jpg'), path: '/Farmtools' },
];

const Home1 = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const visibleData = [
    data[(index + 0) % data.length],
    data[(index + 1) % data.length],
    data[(index + 2) % data.length],
  ];

  return (
    <>
      {/* Section Header */}
      <div className="product-section" id='Home'>
        <hr className="section-line" />
        <div className="section-title">Our Products</div>
      </div>

      {/* Carousel */}
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="carousel-track">
          <div className="cards">
            {visibleData.map((item, idx) => (
              <div className="card" key={idx}>
                <Link to={item.path} className="card-link">
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>

      <div className="product-section1">
        <hr className="section-line" />
      </div>
    </>
  );
};

export default Home1;
