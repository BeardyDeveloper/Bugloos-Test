import '../styles/global.scss';

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { routes } from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            {routes.map(rout => (
              <Route key={rout.id} {...rout} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
