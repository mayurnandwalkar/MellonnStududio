import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactUsPage from './Pages/ContactUsPage';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1600, // Slows down the animation (default is 400ms)
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="service" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
            {/* <Route path="*" element={<NoPage />} />   */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
