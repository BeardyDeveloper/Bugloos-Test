import RegisterImg from 'assets/images/Register.png';
import ArrowImg from 'assets/images/Shape (9).png';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authStart,
  authSuccess,
} from 'redux/actionCreators/authActionCreators';

import { Form } from './Form/From';
import styles from './RegisterForm.module.scss';

export const RegisterForm: FC = () => {
  const loading = useSelector((state: any) => state.auth.loading);

  const dispatch = useDispatch();

  // send form data to server (this is fake and mocked )
  const onSubmit = (data: any) => {
    // dispatch(authStart());
    dispatch(authSuccess(data.username));
  };

  return (
    <div className={['container', styles.container].join(' ')}>
      <div className={styles.registerForm}>
        <div className={styles.imagesContainer}>
          <img src={RegisterImg} alt="" className={styles.author} />
          <div className={styles.circle}>
            <img src={ArrowImg} alt="" className={styles.arrow} />
          </div>
        </div>
        <div className={styles.formContainer}>
          <h6 className={styles.title}>
            Registration
            <p className={styles.titleInside}>Form</p>
          </h6>
          <Form loading={loading} onSubmit={data => onSubmit(data)} />
        </div>
      </div>
    </div>
  );
};
