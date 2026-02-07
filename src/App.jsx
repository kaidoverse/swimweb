import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>


      <Footer />
    </>
  );
};

export default App;
