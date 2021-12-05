import { Contact, ContactType } from 'components/shared/contact/Contact';
import { Social, SocialType } from 'components/shared/social/Social';
import { FC } from 'react';
import useMedia from 'use-media';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const isBelowLaptopS = useMedia({ maxWidth: 1199 });

  return (
    <div className={styles.header}>
      <div className={['container', styles.container].join(' ')}>
        <p className={styles.title}>
          All course 28% off for{' '}
          <a href="/" className={styles.titleLink}>
            Liberian people’s.
          </a>
        </p>
        <Contact type={ContactType.Row} hideArrows={isBelowLaptopS} />
        <Social type={SocialType.Default} />
      </div>
    </div>
  );
};
