import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';


const Products = (props) => {
    const {product,image,price,id} =props.product;

    const history = useHistory();
    const handleClick= (id) => {
        history.push(`/Product/${id}`);
    }

    
    return (
        <div>
            <div >
            < Card  border="info " style={{ width: '12rem' }} >
                    <Card.Img  style={{ width: '10rem' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{product}</Card.Title>                        
                        <Card.Text>Price: {price} Tk</Card.Text>                        
                       
                                                
                        <Button onClick={()=> handleClick(id)} variant="primary" >Add to Cart  </Button>
                    </Card.Body>
                    </Card>
            </div>
             
        </div>
    );
};

export default Products;