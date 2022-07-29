import React from "react";
import { Routes, Route } from 'react-router-dom';


// Components 
import Header from "../Header";
import Footer from "../Footer";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
