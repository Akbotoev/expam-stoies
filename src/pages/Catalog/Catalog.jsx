 import axios from 'axios';
 import { useState,useEffect } from 'react';
import CardClient from '../../ClientCard/CardCliend';
import './Catalog.scss'

export const Catalog = () => {
        const [product,setProduct] = useState([])
        const [error,setError] = useState(null)
         
        useEffect(() => {
            const fetchProducts = async () =>{
                try{
                    const response = await 
                    axios('https://jsonplaceholder.typicode.com/photos')
                    console.log(response.data)
            setProduct(response.data.slice(0, 10)); 
                }catch(error){
                    setError(error);
                }
            }
            fetchProducts(); 
        },[])
        if(error){
           return <div>Error:{error.message}</div>
        }
        return(
            <>
            <div className="container">
                {product?.map(product => (
                    <CardClient
                    key={product.id} product={product}
                    />
                ))}
    
            </div>
            </>
        )
    }
    export default Catalog;
