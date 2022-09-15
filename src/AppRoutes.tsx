import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Create } from './pages/Create/Create';
import { Main } from './pages/Main/Main';
import { View } from './pages/View/View';

export const AppRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="create" element={<Create />} />
        <Route path="view/:id" element={<View />} />
      </Routes>
    </div>
  );
};
