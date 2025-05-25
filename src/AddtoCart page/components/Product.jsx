import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlicer';

const Product = () => {

    // useDispatch : To dispatch any action to slice
    // useSelector : To access the data
    let dispatch=useDispatch();
    let [products, setGetProducts] = useState([]);
    // Data Fetch from api 
    // useEffect case 2 : it run only on first render
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setGetProducts(data));
    }, [])

    function addToCart(p){
        dispatch(add(p));
    }

    console.log(products);
    // MAP FUNCTION EQUAL TO LOOP
    const cards = products.map((product) =>(
        <div className='col-md-3'>
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.id} {product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{addToCart(product)}}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    ))

    console.log(products);

    return (
        <div>
            <h1 className='justify-content-center'>Dashboard</h1>
            <div className="row">
            {cards}
            </div>
        </div>
    )
}

export default Product
