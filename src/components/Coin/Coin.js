import React from 'react'
import "./index.css"

const Coin = ({name, symbol, image, price, market_cap}) => {
  const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "USD" });

  const priceFormat = formateador.format(price)

  const marketCapFormat = formateador.format(market_cap)
  return (
    <div className='coin-container'>
        <img className="coin-img" src={image} alt={name}/>
        <h2>{name}</h2>
        <h2>{priceFormat}</h2>
        <h2>{marketCapFormat}</h2>
        <h2>{symbol}</h2>
    </div>
  )
}

export default Coin;