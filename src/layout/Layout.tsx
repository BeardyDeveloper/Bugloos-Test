import { HamburgerMenu } from 'components/HamburgerMenu/HamburgerMenu';
import { Header } from 'components/Header/Header';
import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';
import useMedia from 'use-media';

export const Layout: React.FC = props => {
  const { children } = props;

  const isBelowTablet = useMedia({ maxWidth: 992 });

  return (
    <>
      {isBelowTablet ? (
        <HamburgerMenu />
      ) : (
        <>
          <Header />
          <Navbar />
        </>
      )}
      {children}
    </>
  );
};
