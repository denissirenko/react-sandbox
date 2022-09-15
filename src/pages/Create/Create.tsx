import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '../../components/Form/Form';

// import style from './Create.module.scss';

// type Inputs = {
//   title: string;
//   description: string;
//   price: number | null;
//   id: string;
//   inCart: boolean;
// };

export const Create = () => {
  // const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>({
  //   defaultValues: {
  //     title: 'dcdc',
  //     description: 'kkkkj',
  //     price: null,
  //     id: Date.now().toString(),
  //     inCart: false,
  //   },
  // });
  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   axios.post('/products', data);
  //   navigate('/');
  // };

  return <Form />;
};
