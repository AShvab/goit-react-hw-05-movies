import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation/Navigation';
import css from './Layout.module.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            background: '#360404',
            color: '#fff',
          }
        }}
      />
      <header className={css.header}>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>  
        <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
