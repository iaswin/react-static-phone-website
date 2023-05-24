import React, { useState } from 'react';
import { Phone } from "./Productdata";
import { Card, Button } from 'react-bootstrap';

const Product = () => {
  const [items, setItems] = useState(Phone);

  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty>1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };

  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className='bg-info text-white'>Products</h1>
      {items.map((item) => (
        <div className='d-inline-flex' key={item.id}>
          <Card className='shadow p-3 m-5 bg-body rounded' style={{ width: '13rem' }}>
            <Card.Img
              style={{ height: '15rem' }}
              className='p-1'
              variant='top'
              src={require(`./photos/${item.image}.jpg`)}
            />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h5>Price: ₹ {item.price}</h5>
              <div>
                <p>Quantity:</p>
                <Button onClick={() => decQty(item.id)} className='m-1'>-</Button>
                {item.qty}
                <Button onClick={() => incQty(item.id)} className='m-1'>+</Button>
              </div>
              <Button variant='primary'>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
