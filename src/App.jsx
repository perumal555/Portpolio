import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from './Componentes/Layout'
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}

          </Route>
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
