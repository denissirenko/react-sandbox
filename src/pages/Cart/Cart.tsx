import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, minusItem, removeItem, plusItem } from '../../features/cart/cartSlice';

import styles from './Cart.module.scss';

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const onClickPlus = (id: String) => {
    dispatch(plusItem(id));
  };

  const onClickMinus = (count: Number, id: String) => {
    if (count > 1) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = (id: String) => {
    if (window.confirm('Ви дійсно бажаєте видалити товар?')) {
      dispatch(removeItem(id));
      axios.patch(`/products/${id}`, { inCart: false });
    }
  };
  return (
    <div className={styles['cart']}>
      {items.map(({ count, description, id, price, title }) => (
        <div key={id} className={styles['cart__item']}>
          <div className={styles['cart__item-info']}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles['cart__item-count']}>
            <button
              disabled={count === 1}
              onClick={() => onClickMinus(count, id)}
              className={styles['button button--outline button--circle cart__item-count-minus']}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </button>
            <b>{count}</b>
            <button
              onClick={() => onClickPlus(id)}
              className={styles['button button--outline button--circle cart__item-count-plus']}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </button>
          </div>
          <div className={styles['cart__item-price']}>
            <b>{count * price} грн</b>
          </div>
          <div className={styles['cart__item-remove']}>
            <div onClick={() => onClickRemove(id)} className={styles['button-remove']}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <div>{totalPrice}</div>
    </div>
  );
};
