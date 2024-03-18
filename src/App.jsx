import Home from './screens/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import About from './screens/About';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import Privacy from './screens/Privacy';
import TermsOfService from './screens/TermsOfService';
import CookiePolicy from './screens/CookiePolicy';
import Checkout from './screens/Checkout';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/terms" element={<TermsOfService />}/>
        <Route path="/cookie" element={<CookiePolicy />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
