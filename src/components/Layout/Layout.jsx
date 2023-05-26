import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
