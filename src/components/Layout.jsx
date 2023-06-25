import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
        reverseOrder={false}
      />
    </>
  );
};
