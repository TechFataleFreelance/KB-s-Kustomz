import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';

function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/about" element={<div>About page here</div>}></Route>
          <Route path="/contact" element={<div>Contact page here</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
