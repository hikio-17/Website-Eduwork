import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Page/Header"
import MenuHome from './Page/MenuHome';
import MenuMakanan from './Page/MenuMakanan';
import MenuMinuman from './Page/MenuMinuman';

const App = () => {
  return (
      <Router>
        <div>
          <Header />
        <Routes>
          <Route exact path="/" element={<MenuHome />} />
          <Route path="/makanan" element={<MenuMakanan />} />
          <Route path="/minuman" element={<MenuMinuman />} />
        </Routes>
        </div>
      </Router>
  )
  
}

export default App;