import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/' && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
