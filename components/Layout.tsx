import NavBar from './NavBar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
    </>
  )
}