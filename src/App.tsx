import React from 'react';
import { Layout } from 'antd';
import { AppRoutes } from './AppRoutes';
import { AppHeader } from './components/Header/Header';
import { AppFooter } from './components/Footer/Footer';

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className="page-section">
        <AppHeader />
        <Content className="main-wrap">
          <AppRoutes />
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;
