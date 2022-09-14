import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header>
      <a
        href="https://github.com/denissirenko"
        target="_blank"
        rel="noopener noreferrer"
        className="brand-logo">
        React App
      </a>
    </Header>
  );
};
