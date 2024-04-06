import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Imagination from './pages/Imagination/Imagination';
import Exercise from './pages/Exercise/Exercise';
import Write from './pages/Imagination/Write';
import AISummary from './pages/AISummary/AISummary';
import WriteImagination from './pages/Imagination/WriteImagination';
import Result from './pages/Imagination/Result';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imagination' element={<Imagination />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='/write' element={<Write />} />
          <Route path='/imagination/write' element={<Write />} />
          <Route path='/aisummary' element={<AISummary />} />
          <Route path='/imagination/write' element={<WriteImagination />} />
          <Route path='/imagination/result' element={<Result />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
