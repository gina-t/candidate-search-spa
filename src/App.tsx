import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;