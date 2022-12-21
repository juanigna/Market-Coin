import { useEffect, useState } from 'react'
import axios from "axios";

export const useFetch = (url = "") => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get(url);
                console.log(data);
                setData(response.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);  
        }

        fetchData();
    }, [])
  return {data: data, loading, error}
}
