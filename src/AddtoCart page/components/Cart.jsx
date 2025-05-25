import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/CartSlicer'

const Cart = () => {
  let dispatch=useDispatch()
  function removeItem(id){
    dispatch(remove(id))
  }
  let cartProducts=useSelector(state=>state.cart)
  const cards = cartProducts.map((product) =>(
        <div className='col-md-12'>
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.id} {product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button variant="danger" onClick={()=>{removeItem(product.id)}}>Remove Item</Button>
                </Card.Body>
            </Card>
        </div>
    ))
  return(
    <>
      <h1>Cart</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Cart
