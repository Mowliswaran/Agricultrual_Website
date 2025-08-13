import './Home.css';
import homeimg from '../Images/Homepageimg.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        // Smooth scroll after a small delay to ensure DOM is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div id="home">  {/* ID for smooth scroll */}
      <div className='hommeimg'>
        <img src={homeimg} alt="Agriculture field" className='homepageimg'/>
        <div className='upperdim'></div>
        <div className='homepagetxt'>
          Connecting Farmers with a<br/> Better Future ...
        </div>
      </div>
    </div>
  );
};

export default Home;
