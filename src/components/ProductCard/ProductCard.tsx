import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Card, Button } from 'antd';

import { Product, remove } from '../../features/cards/productsSlice';
import { addItem, CartItem } from '../../features/cart/cartSlice';

import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<Product> = ({ title, description, price, id, inCart }) => {
  const dispatch = useDispatch();

  const onAddCart = () => {
    const item: CartItem = {
      title,
      description,
      price,
      id,
      inCart: true,
      count: 0,
    };
    axios.patch(`/products/${id}`, { inCart: true });
    dispatch(addItem(item));
  };
  return (
    <Card title={title} extra={<Link to={`/view/${id}`}>Edit</Link>} style={{ width: '100%' }}>
      <p>{description}</p>
      <p>{price}</p>
      <div className={styles['btn-group']}>
        <Button onClick={() => dispatch(remove(id))} type="primary">
          Delete
        </Button>
        <Button onClick={onAddCart} type="primary" danger disabled={inCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
