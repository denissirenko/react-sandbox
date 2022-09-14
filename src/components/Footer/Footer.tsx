import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Copyright Text</Footer>
  );
};
