import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./index.css";

const CoinDetail = ({name, symbol, image}) => {
    const navigate = useNavigate();
  return (
    <div className='coin-detail-container'>
        <div className='coin-detail'>
            <h1>Coin name: <span>{name}</span></h1>
            <h2>Symbol: <span>{symbol}</span></h2>
            <img src={image?.small} alt={name}/>
            <button onClick={() => navigate("/")}>Go to homepage!</button>
        </div>
    </div>
  )
}

export default CoinDetail