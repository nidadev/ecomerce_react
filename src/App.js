
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Routes>
            <Route exact={true} path="/" element={}></Route>
          </Routes>
          </BrowserRouter>
        
  );
}

export default App;
