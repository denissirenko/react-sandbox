import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'antd';

import { Product, remove } from '../../features/cards/productsSlice';

import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<Product> = ({ title, description, price, id }) => {
  const dispatch = useDispatch();
  return (
    <Card title={title} extra={<Link to={`/view/${id}`}>Edit</Link>} style={{ width: '100%' }}>
      <p>{description}</p>
      <p>{price}</p>
      <div className={styles['btn-group']}>
        <Button onClick={() => dispatch(remove(id))} type="primary">
          Delete
        </Button>
        <Button type="primary" danger>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
