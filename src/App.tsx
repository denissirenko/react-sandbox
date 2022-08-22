import React from 'react';
import { Layout } from 'antd';
import { AppRoutes } from './AppRoutes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className="page-section">
        <Header />
        <Content className="main-wrap">
          <AppRoutes />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
