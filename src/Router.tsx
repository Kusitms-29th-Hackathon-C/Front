import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
