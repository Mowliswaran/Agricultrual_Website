import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navi from './components/Navigation/Navi';
import Seeds from './components/Seeds1/Seeds';
import Signup from './components/Signup/Signup';
import Fertiliser from './components/Fertiliser/Fertiliser'
import Farmtools from './components/Farmtools/Farmtools';
import Pesicide from './components/Pesticides/Pesicide';
import Cattle from './components/Cattle/Cattle';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import Home1 from './components/Home1/Home1';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';
import Home4 from './components/Home4/Home4';
import Home5 from './components/Home5/Home5';
import Home6 from './components/Home6/Home6';
import { CartProvider, useCart } from './components/Cart/CartContext';
import CartPage from './components/CartPage/CartPage';
import { Loginhome } from './components/Loginhome/Loginhome';

function Wrapper() {
  const { cartItems } = useCart();

  return (
    <>
      {/* Pass total cart count to Navi */}
      <Navi cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home1 />
              <Home2 />
              <Home3 />
              <Home5 />
              <Contact />
              <Home6 />
            </>
          }
        />
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Loginhome' element={<Loginhome/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/Fertiliser" element={<Fertiliser/>}/>
        <Route path="/Farmtools" element={<Farmtools/>}/>
        <Route path='/Pesicide' element={<Pesicide/>}/>  
        <Route path='/Cattle' element={<Cattle/>}/>      
        {/* ✅ Use CartPage component here */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
