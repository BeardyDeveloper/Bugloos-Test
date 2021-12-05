import '../styles/global.scss';

import PrivateRegister from 'components/PrivateRoutes/PrivateRegister';
import PrivateRoute from 'components/PrivateRoutes/PrivateRoute';
import { CoursesPage } from 'pages/courses/CoursesPage';
import { IndexPage } from 'pages/index/IndexPage';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <IndexPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Courses"
              element={
                <PrivateRoute>
                  <CoursesPage />
                </PrivateRoute>
              }
            />
            <Route path="/Register" element={<PrivateRegister />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
