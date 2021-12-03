import { RegisterPage } from 'pages/register/RegisterPage';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRegister: FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  return token == null ? <RegisterPage /> : <Navigate to="/" />;
};

export default PrivateRegister;
