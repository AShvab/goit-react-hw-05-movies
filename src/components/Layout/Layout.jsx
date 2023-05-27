import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation/Navigation';
import css from './Layout.module.css';

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
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
