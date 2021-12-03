import { navLinks } from 'components/Navbar/navLinks';
import { Contact, ContactType } from 'components/shared/contact/Contact';
import { Social, SocialType } from 'components/shared/social/Social';
import { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosBook } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu: FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? styles.openMenu : styles.closeMenu}>
      <div className={styles.head}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <IoIosBook />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
        </IconContext.Provider>
      </div>
      <div className={styles.content}>
        <div className={styles.linksWrapper}>
          {navLinks.map(link => (
            <NavLink key={link.id} to={link.to} className={styles.link}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <Contact type={ContactType.Column} className={styles.contacts} />
        <div className={styles.socials}>
          <Social type={SocialType.Default} />
        </div>
      </div>
    </div>
  );
};
