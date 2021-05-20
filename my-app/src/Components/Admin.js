import React from 'react';
import { useForm } from "react-hook-form";
import '../Components/Admin.css';



const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleImageUpload = event =>{
        
    }


    const handleAddProduct=()=>{
        const product ={};
        fetch('http://localhost:5000/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <>
        <div className='slider-class'>
            <h1>slider</h1>

        </div>
        <div className='productadd-class'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" rdf={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange="handleImageUpload" />
                <br/>
                
                <input type="submit" />
            </form>
        </div>
        </>
        


            /* <h1>inventory</h1>
            <form action="">
                <p><span>Name:</span><input type="text"/></p>
                <p><span>Price:</span><input type="text"/></p>
                <p><span>Product Image</span><input type="file"/></p>

            </form>
            <button onClick={handleAddProduct}>Add Product</button> */
        
    );
};

export default Admin;