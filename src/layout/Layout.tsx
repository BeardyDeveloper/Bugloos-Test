import { Header } from 'components/Header/Header';
import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';

export const Layout: React.FC = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};
