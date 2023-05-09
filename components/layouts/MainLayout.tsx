import React from 'react';
import AppHeader from '../navigation/AppHeader';
import Footer from '../navigation/Footer';
import MainHeader from '../navigation/MainHeader';

interface IMainLayout {
  type: 'application' | 'auth' | 'main';
  children: React.ReactNode;
}

const MainLayout = ({ children, type }: IMainLayout) => {
  return (
    <>
      {type === 'main' && <MainHeader />}
      {(type === 'auth' || type === 'application') && (
        <AppHeader bgTransparent={type === 'auth' ? true : false} />
      )}
      <main className="min-h-[calc(100vh-256px)] app-container">
        {children}
      </main>
      {(type === 'application' || type === 'main') && (
        <Footer burble={type === 'application' ? false : true} />
      )}
    </>
  );
};

export default MainLayout;
