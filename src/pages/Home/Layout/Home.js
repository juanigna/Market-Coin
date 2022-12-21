import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Coin from '../../../components/Coin/Coin';
import { useFetch } from '../../../hooks/useFetch';
import "./index.css";

const Home = () => {
    const {data, loading, error} = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    const navigate = useNavigate();
  return (
    <div>
        <h1>Market Coin</h1>
        {
            loading && <h3>Cargando...</h3> 
        }
        {data && 
        <div className='home-container'>
            {
                 data.map(coin => (
                    <Link to={`/coin/${coin.id}`}>
                        <Coin key={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image}/>
                    </Link>
                ))
            }
        </div>
       }
    </div>
  )
}

export default Home