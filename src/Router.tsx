import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Imagination from './pages/Imagination/Imagination';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imagination' element={<Imagination />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
