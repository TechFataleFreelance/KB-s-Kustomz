import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
