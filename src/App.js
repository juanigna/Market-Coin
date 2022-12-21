import './App.css';
import Home from "./pages/Home";
import CoinInfo from './pages/CoinInfo';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<CoinInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
