import React, { useEffect, useState } from 'react';
import FakData from '../Data/Data.json';
import Products from './Products';
import './Home.css';


const Home = () => {
    const [product,setProduct]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProduct(data))
        
        

    },[])
    
    return (   
               <div  className="mapstyle container mt-2"> 
                   
                   {
                       product.map(pl =><Products product={pl}></Products>)
                    }
               </div>                            
        
    );
};

export default Home;


