import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBarStyled } from './AppBar/AppBar';
import { ColorRing } from 'react-loader-spinner';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <AppBarStyled />
      <Suspense
        fallback={
          <Box
            sx={{
              position: 'absolute',
              top: '35%',
              left: '45%',
            }}
          >
            <ColorRing
              visible={true}
              height="120"
              width="120"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </Box>
        }
      >
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
