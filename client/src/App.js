
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbarr from './Navbar/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
