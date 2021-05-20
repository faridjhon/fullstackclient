
import FakData from '../Data/Data.json';

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';


const Checkout = () => {

    const { id} = useParams();

    const [products , setProducts] = useState([]);
    console.log(setProducts)


    useEffect(() => {
        fetch('http://localhost:5000/Products'+id)
        .then(res =>res.json())
        .then(data =>setProducts(data))
        
    }, [id])

    

    return (
        <div >  
                 <h1>{id}This Product details</h1>
                               
                
                 <h4>{id.image}</h4>                                                  

                  
        </div>
    );
};

export default Checkout;