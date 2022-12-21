import React from 'react'
import { useParams } from 'react-router-dom'
import CoinDetail from '../../../components/CoinDetail/CoinDetail';
import { useFetch } from '../../../hooks/useFetch';

const CoinInfo = () => {
    const {id} = useParams();
    const {data, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    console.log(data)
  return (
    <div>
        {loading ? <div><h1>Loading...</h1></div> :  data && <div>
            {
                <CoinDetail name={data.name} symbol={data.symbol} image={data.image}/>
            }    
        </div>}
       
    </div>
  )
}

export default CoinInfo