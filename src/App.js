
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/header.js';
import Home from './pages/Home/index';
import About from './pages/About/index';


function App() {
  return (
    <BrowserRouter>
          <Header />

     <Routes>
         <Route path="/react" element={<Home />} />
         <Route path="/react/about" element={<About />} />

     </Routes>
</BrowserRouter>
  );
}

export default App;

