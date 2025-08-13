import './Contact.css';
import Home4 from '../Home4/Home4';
import Home6 from '../Home6/Home6';
import cont from '../Images/contact.jpeg'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="contact-container">
        <div>
          <img src={cont} className='iimg'/>
        </div>
        <div className='pp'>
          <h3>AGRIMIX</h3>
          <p>No 5 Ragavendira Nagar</p>
          <p>[RI Office Backside]</p>
          <p>Valavanur - 605108</p>
          <p>Villupuram</p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Home4 />
    </div>
  );
};

export default Contact;
