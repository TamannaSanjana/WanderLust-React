import logo from './logo.svg';
import './App.css';


import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nabvar';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PackagePage from './Pages/PackagePage';
import BlogPage from './Pages/BlogPage';
import DestinationPage from './Pages/DestinationPage';
import TourPage from './Pages/TourPage';
import BookingPage from './Pages/BookingPage';
import GuidesPage from './Pages/GuidesPage';
import TestimonialPage from './Pages/TestimonialPage';
import ContractPage from './Pages/ContractPage';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contract" element={<ContractPage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
    </>
    </>
  );
}

export default App;
