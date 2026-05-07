import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => {
    return (
      <div className='selection:bg-appleBlue relative" antialiased selection:text-white'>
        <Outlet />
      </div>
    );
  },
});
