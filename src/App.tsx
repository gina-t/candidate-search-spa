import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Outlet />
    </div>
  );
};

export default App;