import Logo from 'assets/images/Logo.png';
import ShapeRight from 'assets/images/Shape (12).png';
import ShapeLeft from 'assets/images/Shape-yellow (3).png';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { Contact, ContactType } from 'components/shared/contact/Contact';
import { Social, SocialType } from 'components/shared/social/Social';
import { TextField } from 'components/shared/textField/TextField';
import { FC, useState } from 'react';

import { CopyRight } from './CopyRight/CopyRight';
import styles from './Footer.module.scss';
import { categories, quickLinks } from './links';

export const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');

  const onSubscribe = () => {
    console.log(email);
  };

  return (
    <footer className={styles.footer}>
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <span className={styles.logoTitle}>Caribbean Ct</span>
            <span className={styles.subTitle}>Haymarket, Virginia (VA).</span>
            <Contact
              type={ContactType.ColumnHighlight}
              className={styles.contact}
            />
            <Social type={SocialType.Secondary} />
          </div>
          <div className={styles.column}>
            <span className={styles.title}>Category</span>
            {categories.map(category => (
              <a key={category.id} href={category.path} className={styles.link}>
                {category.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.title}>Quick Links</span>
            {quickLinks.map(link => (
              <a key={link.id} href={link.path} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.title}>Subscribe</span>
            <p className={styles.text}>
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
            <div className={styles.inputWrapper} />
            <TextField
              type="text"
              placeholder="Email Here"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className={styles.buttonWrapper}>
              <Button
                type={ButtonType.Success}
                label="Subscribe Now"
                onClick={onSubscribe}
              />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
      <img src={ShapeLeft} alt="" className={styles.shapeLeft} />
      <img src={ShapeRight} alt="" className={styles.shapeRight} />
    </footer>
  );
};
