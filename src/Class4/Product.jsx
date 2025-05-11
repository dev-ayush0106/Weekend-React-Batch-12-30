import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Product = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    const cards=products.map((d)=>(
        <div className="col-md-3">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={d.image} />
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
        <Card.Text>
            $ {d.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    ))

    console.log(products);
  return (
    <div>
        <div className="row">
        {cards}
        </div>
    </div>
  )
}

export default Product
