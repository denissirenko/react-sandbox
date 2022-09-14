import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';
import { BtnBlock } from '../../components/BtnBlock/BtnBlock';
import { fetchProducts, selectProductsData } from '../../features/cards/productsSlice';

import { Spin } from 'antd';

import styles from './Main.module.scss';

export const Main = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(selectProductsData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <BtnBlock />
      {status === 'loading' ? <Spin className="spin-loader" size="large" tip="Loading..." /> : null}
      <div className={styles.cards}>
        {products.map((item: any) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
