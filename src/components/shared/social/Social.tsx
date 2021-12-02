import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { SiSkypeforbusiness } from 'react-icons/si';

import styles from './Social.module.scss';

export enum SocialType {
  Default,
  Secondary,
}

export interface SocialProps {
  type: SocialType;
}

export const Social: FC<SocialProps> = props => {
  const { type } = props;

  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{
          className:
            type === SocialType.Secondary ? styles.grayIcon : styles.lightIcon,
        }}
      >
        <div>
          <FiFacebook />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            type === SocialType.Secondary ? styles.grayIcon : styles.lightIcon,
        }}
      >
        <div>
          <FiTwitter />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            type === SocialType.Secondary ? styles.grayIcon : styles.lightIcon,
        }}
      >
        <div>
          <SiSkypeforbusiness />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            type === SocialType.Secondary ? styles.grayIcon : styles.lightIcon,
        }}
      >
        <div>
          <FiInstagram />
        </div>
      </IconContext.Provider>
    </div>
  );
};
