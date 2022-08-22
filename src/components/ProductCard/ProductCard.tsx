import React from 'react';
import { Card, Button } from 'antd';

import { Product } from '../../features/cards/productsSlice';

import styles from './ProductCard.module.css';

const ProductCard: React.FC<Product> = ({ title, description, price }) => {
  return (
    <Card title="Default size card" extra={<a href="#">Edit</a>} style={{ width: 300 }}>
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
