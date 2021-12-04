import { CoursesPage } from 'pages/courses/CoursesPage';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  return token != null ? <CoursesPage /> : <Navigate to="/Register" />;
};

export default PrivateRoute;
