import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter >
        <div class="text-pink-500 text-center h-[30%] w-full ">Navbar</div>
        <Routes>
          <Route path="/" element={<div>home Page</div>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
