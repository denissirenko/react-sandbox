import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  title: '',
  description: '',
  price: null,
  id: Date.now().toString(),
  inCart: false,
};

export const Form = () => {
  const [product, setProduct] = useState(emptyProduct);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(`/products/${id}`).then((res) => {
        const data = res.data;
        setProduct(data);
      });
    }
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: product,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (id) {
      axios.put(`/products/${id}`, data);
      navigate('/');
      console.log(222);
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
