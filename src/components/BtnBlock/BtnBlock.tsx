import React from 'react';

import { Button, Tooltip } from 'antd';
import { ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './BtnBlock.module.scss';
import { Link } from 'react-router-dom';

export const BtnBlock = () => {
  return (
    <div className={styles['btn-wrap']}>
      <Tooltip title="add product">
        <Link to="/create">
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Tooltip>
      <Link to="/cart">
        <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
      </Link>
    </div>
  );
};
