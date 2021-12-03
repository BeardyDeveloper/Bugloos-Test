import '../styles/global.scss';

import PrivateRegister from 'components/PrivateRoutes/PrivateRegister';
import PrivateRoute from 'components/PrivateRoutes/PrivateRoute';
import { RegisterPage } from 'pages/register/RegisterPage';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

const App: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  console.log(token);
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<PrivateRoute />} />
            <Route path="/Register" element={<PrivateRegister />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
