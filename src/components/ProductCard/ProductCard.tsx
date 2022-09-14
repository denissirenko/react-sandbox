import React from 'react';
import { Card, Button } from 'antd';

import { Product } from '../../features/cards/productsSlice';

import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<Product> = ({ title, description, price }) => {
  return (
    <Card
      title="Default size card"
      extra={<Link to="/create">Edit</Link>}
      style={{ width: '100%' }}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <div className={styles['btn-group']}>
        <Button type="primary">Delete</Button>
        <Button type="primary" danger>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
