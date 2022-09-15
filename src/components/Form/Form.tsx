import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectProductsData } from '../../features/cards/productsSlice';
import axios from 'axios';

import { useForm, SubmitHandler } from 'react-hook-form';

import style from './Form.module.scss';

type Inputs = {
  title: string;
  description: string;
  price: number | null;
  id: string;
  inCart: boolean;
};

const emptyProduct = {
  id: Date.now().toString(),
  title: '',
  description: '',
  price: null,
  inCart: false,
};

export const Form = () => {
  const { id } = useParams();
  const { products } = useSelector(selectProductsData);
  const productItem = products.find((item) => item.id === id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: productItem
      ? {
          id: productItem.id,
          title: productItem.title,
          description: productItem.description,
          price: productItem.price,
          inCart: false,
        }
      : emptyProduct,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (id) {
      axios.put(`/products/${id}`, data);
      navigate('/');
    } else {
      axios.post('/products', data);
      navigate('/');
    }
  };

  return (
    <div className={style['form-wrap']}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style['form-item']}>
          <input type="text" placeholder="Title" {...register('title', { required: true })} />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className={style['form-item']}>
          <textarea placeholder="Description" {...register('description', { required: true })} />

          {errors.description && <span>This field is required</span>}
        </div>
        <div className={style['form-item']}>
          <input placeholder="Price" type="number" {...register('price', { required: true })} />

          {errors.price && <span>This field is required</span>}
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
