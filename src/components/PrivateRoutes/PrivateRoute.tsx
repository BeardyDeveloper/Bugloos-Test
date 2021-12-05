import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface PrivateRoute {
  children: ReactElement;
}

const PrivateRoute: FC<PrivateRoute> = ({ children }) => {
  const token = useSelector((state: any) => state.auth.token);

  return token != null ? children : <Navigate to="/Register" />;
};

export default PrivateRoute;
