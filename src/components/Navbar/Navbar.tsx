import Logo from 'assets/images/Logo.png';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/actionCreators/authActionCreators';

import styles from './Navbar.module.scss';
import { navLinks } from './navLinks';

export const Navbar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [scrollState, setScrollState] = useState('top');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if (scrolled && scrolled >= 120) {
        setScrollState('bottom');
      } else {
        setScrollState('top');
      }
    });
  }, [scrollState]);

  return (
    <div
      className={scrollState === 'top' ? styles.navbarTop : styles.navbarBottom}
    >
      <div
        className={[
          'container',
          scrollState === 'top' ? styles.containerTop : styles.containerBottom,
        ].join(' ')}
      >
        <img src={Logo} alt="logo" className={styles.logo} />
        <div className={styles.linksWrapper}>
          {navLinks.map(link => (
            <NavLink
              key={link.id}
              to={link.to}
              // className={styles.link}
              className={(props: any) => {
                return [
                  styles.link,
                  props.isActive ? styles.activeLink : '',
                ].join(' ');
              }}
              end
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonWrapper}>
            <Button
              type={ButtonType.Link}
              label="Log Out"
              onClick={() => dispatch(logOut())}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              type={ButtonType.Default}
              label="Sign Up"
              onClick={() => navigate('/Register')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
