/* import AppToolbar from './components/AppToolbar';
import AppDrawer from './components/AppDrawer';
import Notifications from '../components/Notifications'; */
import React from 'react';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div class='min-h-screen bg-gray-400'>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
