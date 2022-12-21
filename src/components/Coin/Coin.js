import React from 'react'
import "./index.css"

const Coin = ({name, symbol, image}) => {
  
  return (
    <div className='coin-container'>
        <img className="coin-img" src={image} alt={name}/>
        <h2>{name}</h2>
        <h2>{symbol}</h2>
    </div>
  )
}

export default Coin;